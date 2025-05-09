import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='lg:mr-10 hover:bg-amber-500 px-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;