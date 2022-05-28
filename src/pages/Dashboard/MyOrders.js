import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const [myOrder, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://enigmatic-escarpment-74336.herokuapp.com/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        // navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrders(data);
                });
        }
    }, [user])

    return (
        <div>

            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Customer Name</th>
                            <th>Email Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td><img className='w-8' src={a.img} alt="" /></td>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.phone}</td>
                                <td>
                                    <Link to="payment"> <button className='btn btn-success'>Pay</button> </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;