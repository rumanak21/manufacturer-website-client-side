import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-10 ml-10">
                <h2 className='text-3xl font-bold text-slate-900 uppercase font-mono'>Hello, {user?.displayName} It's Your Dashboard!</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-200 rounded text-slate-900 font-bold uppercase">
                    {!admin && <>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/myOrders">My All Orders</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/addReview">Add A Review</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/profile">My Profile</Link></li>
                    </>

                    }

                    {admin && <>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/profile">My Profile</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/manageTools">Manage Tools</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/addTools">Add A Tool</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/users">Users</Link></li>
                    </>}
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;