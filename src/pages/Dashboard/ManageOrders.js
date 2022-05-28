import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';



const ManageOrders = () => {

    const { data: products, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='my-10 container'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageOrder
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ManageOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;