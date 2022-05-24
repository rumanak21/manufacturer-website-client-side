import React from 'react';
import cart from './../../img/icon/cart.png'
import clients from './../../img/icon/clients.png'
import feedback from './../../img/icon/feedback.png'
import world from './../../img/icon/world.png'

const BusinessSummary = () => {
    return (
        <div className=' mt-10 mb-10'>
            <h1 className='text-center text-success text-4xl text-extrabold font-extrabold'>Business Summary</h1>
            <div className='flex flex-raw'>
                <div className='card w-96'>

                    <div class="card-body items-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src={world} alt="" />
                        </div>
                        <p>50</p>
                        <p>Countries</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src={cart} alt="" />
                        </div>

                        <p>200+</p>
                        <p>Order Completed</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src={clients} alt="" />
                        </div>

                        <p>150+</p>
                        <p>Happy Clients</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src={feedback} alt="" />
                        </div>

                        <p>170+</p>
                        <p>Feedbacks</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;