import { BadgeCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex mt-2'><BadgeCheck className='mr-2'></BadgeCheck>{feature}</p>
    );
};

export default PricingFeature;