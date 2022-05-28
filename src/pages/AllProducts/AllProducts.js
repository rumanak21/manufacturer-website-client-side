import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-escarpment-74336.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const navigate = useNavigate()

    return (
        <div className='grid grid-cols-3 m-10'>

        {products.map(p => <div class="card w-96 bg-base-100 shadow-xl mb-10">
            <figure class="px-10 pt-10">
                <img src={p.picture} alt="Shoes" class="rounded-xl" />
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

            );
};

            export default AllProducts;