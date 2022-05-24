import React from 'react';
import image from "./../../img/banner-2.jpg"

const HeroSection2 = () => {
    return (
        <div class="hero m-10 mx-0 bg-base-200 bg-[url('https://www.powertoolsuk.co.uk/media/wysiwyg/banners/makita-cordless-tools_compressed.jpeg')]">
            <div class="hero-content flex-col md:flex-col-reverse lg:flex-row-reverse">
                <div class="text-center text-white text-center mx-10">
                    <h1 class="text-5xl font-bold uppercase">Who we are?</h1>
                    <p class="py-6">We are an international Electric Tools provider. We are working since 2010.</p>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection2;