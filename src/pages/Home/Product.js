import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <section className=''>
            <h2 className='text-center text-success text-4xl font-bold p-10'>Electric Tools {product.length} </h2>
            <div className='grid lg:grid-cols-3 place-items-center	'>

                {product.slice(0,3).map(p => <div class="card w-96 bg-base-100 shadow-xl mb-10">
                    <figure class="px-10 pt-10">
                        <img width={200} src={p.picture} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-left">
                        <h2 class="card-title">{p.name}</h2>
                        <p>{p.description.slice(0,100)}</p>
                        <p>Minimum Order: {p.minorder}/ Piece</p>
                        <p>Available Products: {p.availableproduct}/ Piece</p>
                        <p>Price: {p.price}/ Piece</p>
                        <div class="card-actions">
                            <Link to={`/purchase/${p._id}`} ><button class="btn btn-success">Buy Now </button></Link>
                        </div>
                    </div>
                </div>)}


            </div>
            <Link to='/allproducts'> <div  className=' flex flex-raw justify-end'><p className=' text-info text-xl'>See All Products</p></div></Link>
            
        </section>

    );
};

export default Product;