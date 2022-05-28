import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    const min =`${product.minorder}`
    const max =`${product.availableproduct}`

    useEffect(() => {
        const url = `https://enigmatic-escarpment-74336.herokuapp.com/tools/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [id])

    const onSubmit = async data => {
        const order = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            quantity: data.quantity,
            img: product.picture,
            price: product.price
        }
        console.log(product.price)

        fetch('https://enigmatic-escarpment-74336.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Purchase successfully')
                    reset();
                }
                else {
                    toast.error('Failed to Purchase');
                }
            })

    }
  
<Loading></Loading>
    

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl m-10">
            <div class="card-body items-center  bg-zinc-500 text-white">
                <h2 class="card-title">{product.name}</h2>
                <p>Minimum Order: {product.minorder}/ Piece</p>
                <p>Available Products: {product.availableproduct}/ Piece</p>
                <p>Price: {product.price}/ Piece</p>
                
            </div>


            <div className='m-10'>
                <h2 className="text-2xl mb-5 mt-5 font-bold uppercase text-accent"> Complete The Form </h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            // placeholder="Enter Your Name"
                            value={user?.displayName}
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Your Email Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="text"
                            // placeholder="Enter Your Email Address"
                            value={user?.email}
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Your Email Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {

                            })}
                        />
                        <label className="label">
                            {errors.phone?.phone === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>

                        <input
                            type="number"
                          
                            placeholder={`Minimum Order ${product.minorder} Piece.`}
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", { 

                                min: 100,
                            
                                required: {
                                    value: true,
                                    message: 'Please add Minimum 100'
                                },
                            })}
                        />
                        <label className="label">
                        {errors.quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>

                        <input
                            disabled
                            type="number"
                            // placeholder={`Minimum Quantity ${product.minorder}`}
                            value={product?.price}
                            
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", { 

                                
                            })}
                        />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                   
                    <input  className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Confirm Order" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;