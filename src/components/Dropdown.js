import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div
         className= {
            isOpen 
            ? "grid grid-rows-4 text-center items-center bg-yellow-500":'hidden'
        }
        onClick={toggle}>
            
            <Link className='p-4' to ='/'>Start your Journey</Link>
               <Link className='p-4' to ='/'>Transform</Link>
               <Link className='p-4' to ='/'>Services</Link>
               <button
                    className='p-4 hover:bg-yellow-400 rounded-lg  realtive shadow-sm' to ='/'>LOGIN
                   </button>
        </div>
    )
}

export default Dropdown
