import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=' mt-10 mb-10'>
            <h1 className='text-center text-success text-4xl text-extrabold font-extrabold'>Business Summary</h1>
            <div className='flex flex-raw'>
                <div className='card w-96'>

                    <div class="card-body items-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src="https://cdn-icons-png.flaticon.com/512/2947/2947656.png" alt="" />
                        </div>
                        <p>50</p>
                        <p>Countries</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src="https://cdn-icons.flaticon.com/png/512/2672/premium/2672909.png?token=exp=1653361954~hmac=568a0e4df4811b6f3bc73da28dcf7410" alt="" />
                        </div>

                        <p>200+</p>
                        <p>Order Completed</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png" alt="" />
                        </div>

                        <p>150+</p>
                        <p>Happy Clients</p>
                    </div>

                </div>
                <div className='card w-96'>
                    <div class="card-body items-center text-center font-semibold text-neutral">
                        <div class="w-24 mask mask-squircle">
                            <img src="https://cdn-icons.flaticon.com/png/512/2839/premium/2839162.png?token=exp=1653362119~hmac=a6834a41455a2658488f5119c4dbda35" alt="" />
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