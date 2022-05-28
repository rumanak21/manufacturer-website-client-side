import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Opps!! You cant Add Admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm btn-outline btn-accent">Make Admin</button>}

                {
                    role === 'admin' && <button className="btn btn-sm btn-outline btn-accent">Admin</button>
                }

            </td>
        </tr>
    );
};

export default User;