
import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About Us",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 5,
        name: "Blog",
        path: "/blog"
    },
];


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationLinks.map(route => <Link
        key={route.id}
        route={route}
    ></Link>);
    return (
        <nav className='mx-5 lg:mx-0 py-5 flex justify-between items-center'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden mr-2'></X>
                    :
                    <Menu className='md:hidden mr-3 cursor-pointer'></Menu>
                }
                <ul className={`md:hidden 
                    ${open ? 'top-16'
                    : 
                    '-top-60'} 
                    duration-1000 absolute bg-amber-100 rounded-lg  space-y-2 text-black`}>
                    {links}
                </ul>
                <h2>My Nav</h2>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <button className='btn'>Button</button>
        </nav>
    );
};

export default NavBar;