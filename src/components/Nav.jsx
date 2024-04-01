import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import nike_logo from "../assets/images/nike-logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-gray-300 z-50'>
      <div>
        <img src={nike_logo} alt='Logo Image' style={{ width: '15%' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex gap-8 cursor-pointer'>
        <li>
          <Link to='home' smooth={true} duration={100}>
            Home
          </Link>
        </li>
        <li>
          <Link to='About' smooth={true} duration={100}>
            About
          </Link>
        </li>
        <li>
          <Link to='Services' smooth={true} duration={100}>
            Services
          </Link>
        </li>
        <li>
          <Link to='Offer' smooth={true} duration={100}>
          Offer
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={100}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-50 cursor-pointer'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='About' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='Services' smooth={true} duration={500}>
          Services
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='Offer' smooth={true} duration={500}>
            Offer
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* Close icon for mobile menu */}
        <div onClick={handleClick} className="absolute top-4 right-4 text-gray-300 cursor-pointer">
          <FaTimes size={24} />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
