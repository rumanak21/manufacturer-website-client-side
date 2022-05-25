import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuitems = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <li><Link to="blog">Dashboard</Link></li>
        }
        <li><Link to="blog">About Us</Link></li>
        <li><Link to="blog">Blogs</Link></li>
        <li><Link to="blog">Portfolio</Link></li>
        <li><Link to="blog">Products</Link></li>




    </>


    return (
        <div class="navbar  bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">Electric Tools Manufacturer
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            <div class="navbar-end ">

                {user ? <button className="btn btn-active btn-ghost " onClick={logout} >Sign Out</button> : <>

                   
                        <Link to="/login" class="btn btn-ghost normal-case text-bold" >Login</Link>
                        <Link to="/signup" class="btn btn-ghost normal-case text-bold" >Sign Up</Link>
                    

                </>}

            </div>
        </div>
    );
};

export default Header;