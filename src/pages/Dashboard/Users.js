import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUser from './AllUser';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-escarpment-74336.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(users)

    if (isLoading) {
        return <Loading></Loading>
    }

    
    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <AllUser
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AllUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;