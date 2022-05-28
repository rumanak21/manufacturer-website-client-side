import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageTool from './ManageTool';



const ManageTools = () => {

    const { data: products, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageTool
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                               
                            ></ManageTool>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageTools;