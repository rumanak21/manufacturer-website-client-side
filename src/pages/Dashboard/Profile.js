import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import userImg from '../../img/user.jpg'

const Profile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='mt-10'>
            <div class="card card-side bg-base-100 shadow-xl w-8/12">
                <figure><img className='w-[280px]' src={userImg} alt="Movie"/></figure>
            <div class="card-body">
                 <h2 class="card-title"> {user?.displayName} </h2>
                <p> {user?.email} </p>
            <div class="card-actions ">
               {/* <input type="text" /> <button class="btn btn-success">Update Profile</button> */}

               <div class="form-control">
  <label class="label">
    <span class="label-text">Enter Your Name </span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="Name" class="input input-bordered" />
    <button className='btn btn-success'>Update</button>
  </label>
</div>
            </div>
        </div>
</div>

        </div>
    );
};

export default Profile;