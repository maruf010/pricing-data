import React, { use } from 'react';
import PricingCard from '../../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData);
    
    return (
        <div className='duration-1000'>
            <h2 className='text-3xl lg:text-5xl mb-8 ml-5 lg:ml-0'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-0'>
                {/* {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing}
                        ></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricingCard
                    key={pricing.id}
                        pricing={pricing}
                    ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;