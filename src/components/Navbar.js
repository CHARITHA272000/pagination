import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-blue-900 text-white realtive shadow-sm font-serif  text-2xl' role='navigation'>
            <Link to='/' className='pl-3'>
                Eazy Apply
            </Link>
           
            <div className ="  flex justify-center items-center font-sans text-sm space-x-20 p-2 text-white ">
               <Link className='p-1 pr-6' to ='/'>ENQUIRIES</Link>
               <Link className='p-1 pr-6' to ='/'>COMMUNICATION</Link>
               <Link className='p-1 pr-6' to ='/'>EVENTS</Link>
               <Link className='p-1 pr-28' to ='/'>OFFERS</Link>
               <div className ="pr-6 font-mono text-xl md:block space-x-6 ">
               <Link> <i class=" icon Navbar fas fa-cog"></i></Link>
                <Link><i class=" icon Navbar fas fa-share-alt"></i>
                </Link>
                <Link> <i class=" icon Navbar far fa-bell"></i></Link>
                </div>
                   
            </div>
        </nav>
    )
}

export default Navbar
