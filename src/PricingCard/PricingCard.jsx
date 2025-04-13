import React from 'react';
import PricingFeature from './PricingFeature';


const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing;
    
    return (
        <div className='border bg-amber-600 p-5 rounded-lg'>
            {/* card header */}
            <div>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-400 p-4 rounded-lg mt-7'>
                <p>{description}</p>
                <div>
                    {
                        features.map((feature,index) => <PricingFeature 
                        key={index}
                        feature={feature}
                        ></PricingFeature>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCard;