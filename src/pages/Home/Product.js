import React, { useEffect, useState } from 'react';

const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <section className='mx-10'>
            <h2 className='text-center text-success text-4xl font-bold p-10'>Electric Tools</h2>
            <div className='grid grid-cols-3'>

                {product.slice(0,3).map(p => <div class="card w-96 bg-base-100 shadow-xl mb-10">
                    <figure class="px-10 pt-10">
                        <img src={p.picture} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-left">
                        <h2 class="card-title">{p.name}</h2>
                        <p>{p.description.slice(0,100)}</p>
                        <p>Price: {p.price}/ Piece</p>
                        <div class="card-actions">
                            <button class="btn btn-success">Buy Now </button>
                        </div>
                    </div>
                </div>)}


            </div>
        </section>

    );
};

export default Product;