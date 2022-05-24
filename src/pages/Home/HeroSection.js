import React from 'react';

const HeroSection = () => {
    return (
        <div class="hero m-10 bg-base-200 margin=0">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.powertoolsuk.co.uk/media/catalog/product/cache/94a3e057056f6e2e92c241d8127151dc/b/o/bosch_gas35hafc_dust_extractor_power_tools_uk_0321_hero_1.jpg" />
                <div>
                    <h1 class="text-4xl font-bold">A FLEXIBLE AND SERVICE FOCUSED APPROACH
                        TO SUPPLY TOOLS AND ELECTRICAL EQUIPMENT	</h1>
                    <p class="py-6">For 15 years, the Electrical  Manufacturer Tools team has supplied the manufacturing industry with ‘ the right tool for the job’. As customer service-based industrial suppliers, we can offer a wealth of knowledge and expertise in many sectors. Please visit us at our tool shop or email us.</p>
                    <button class="btn btn-success"> Shp Now</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;