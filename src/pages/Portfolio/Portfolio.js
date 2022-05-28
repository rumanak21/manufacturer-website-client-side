import React from 'react';
import rumana from '../../img/user.jpg'

const Portfolio = () => {

    return (
<div className='mt-10 mx-auto justify-center flex mb-10'>
            <div class="card card-side bg-base-100 shadow-xl w-8/12">
                <figure><img className='w-[280px]' src={rumana} alt="Movie"/></figure>

            <div class="card-body">

                <h2 > <strong>Name: </strong> Rumana Khatun </h2>
                <p> <strong>Email: </strong> rumanakhatun55@gmail.com </p>
                <p> <strong>Education:</strong> BSc in CSE (BUBT)  </p>

                <h5 className=''> <strong> My Skills: </strong>  </h5>
                
                <span>
                <div class="badge badge-lg mr-1">Javascript</div>
                <div class="badge badge-lg">React</div>
                <div class="badge badge-lg mr-1">Node Js</div>
                <div class="badge badge-lg mr-1">Mongodb</div>
                <div class="badge badge-lg mr-1">Express</div>
                <div class="badge badge-lg mr-1">React Bootstrap </div>
                <div class="badge badge-lg mr-1 mt-2">Daisy ui</div>
                <div class="badge badge-lg mr-1 mt-2">Tailwind</div>
                <div class="badge badge-lg mr-1 mt-2">Project Management</div>
                </span>

                <br />

                <div className='card-action mt-5'>
                    <a href="#"> <button className='btn btn-outline'>Project 1</button> </a>
                    <a href="#"> <button className='btn btn-outline'>Project 2</button></a>
                    <a href="#"> <button className='btn btn-outline'>Project 3</button></a>
                </div>



                <div class="card-actions mt-5"> <button  className='btn btn-outline btn-success'> Hire Me </button> </div>
            </div>
        </div>

    </div>
    );
};

export default Portfolio;