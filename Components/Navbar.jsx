import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import Logo from '../public/assets/logo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={Logo}
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer rounded-full'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#certificatons'>Certifications</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact Me</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : '' 
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[50%] sm:w-[50%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-hidden'
              : ' fixed left-[-10000px] top-0 p-10 ease-in duration-500 overflow-hidden'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between overflow-hidden'>
              <Link href='/'>
                <a>
                  <Image
                    src={Logo}
                    width='50'
                    height='50'
                    alt='/'
                    className='cursor-pointer rounded-full'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase mx-2'>
              <Link href='/' >
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  About
                </li>
              </Link>
              <Link href='../Components/projects.js'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  Projects
                </li>
              </Link>
              <Link href='../Components/certifications.js'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  Certifications
                </li>
              </Link>
              <Link href='../Components/resume.js'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  Resume
                </li>
              </Link>
              <Link href='../Components/contact.js'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-20'>
             
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                
                <a
                  href='https://www.linkedin.com/in/anand-pandey-7522b81b4">'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Anandpandey0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;