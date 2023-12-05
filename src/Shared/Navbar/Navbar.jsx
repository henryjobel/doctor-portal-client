import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group 1.png'

const Navbar = () => {
    const navLinks = 
    <>
    <li><Link className='hover:bg-orange-400' to='/'>Home</Link></li>
    <li><Link className='hover:bg-orange-400' to='/'>About</Link></li>
    <li><Link className='hover:bg-orange-400' to='/'>Appointment</Link></li>
    <li><Link className='hover:bg-orange-400' to='/'>Login</Link></li>
    </>
    return (
        <div>
            <div className="fixed z-10 text-white bg-black shadow-sm navbar bg-opacity-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-black bg-opacity-10 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex py-4 lg:ml-40'>
                        <img src={logo} alt="logo" />
                    <a className="text-xl btn btn-ghost"><Link to='/'>Docto <span className='text-orange-300'>Portal</span></Link></a>
                    </div>
                </div>
                <div className="hidden text-white navbar-center lg:flex">
                    <ul className="px-1 ml-56 font-bold menu menu-horizontal">
                        {navLinks}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;