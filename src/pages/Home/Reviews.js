import React from 'react';

const Reviews = () => {
    return (
        <div className='flex flex-col items-center mb-10'>
            <h1 className='text-center text-success text-4xl text-extrabold font-extrabold'>Reviews</h1>
            <div className='flex md:flex-col lg:flex-row align-items-center justify-center'>
                <div class="card w-50  bg-base-100 shadow-xl m-2">
                    <figure class="px-10 pt-10">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://randomuser.me/api/portraits/men/21.jpg" />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Jo Smith</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-50  bg-base-100 shadow-xl m-2">
                    <figure class="px-10 pt-10">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://randomuser.me/api/portraits/men/33.jpg" />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Henry Mclaughlin</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-50  bg-base-100 shadow-xl m-2">
                    <figure class="px-10 pt-10">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://randomuser.me/api/portraits/men/20.jpg" />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Corey Weber</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-50  bg-base-100 shadow-xl m-2">
                    <figure class="px-10 pt-10">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://randomuser.me/api/portraits/men/31.jpg" />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Noel Thompson</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-50 bg-base-100 shadow-xl m-2">
                    <figure class="px-10 pt-10">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://randomuser.me/api/portraits/men/83.jpg" />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Pat Drake</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Reviews;