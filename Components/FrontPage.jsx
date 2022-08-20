import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from '../public/assets/logo.jpg'


// import { AiTwotoneStar } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const FrontPage = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center resposive-text bg-white text-black "
    >
      <div className="  max-w-[1240px] w-full  h-full mx-auto p-2 flex flex-col flex-col-reverse   items-center  justify-around border-solid border-2 border-black overflow-hidden  sm:flex-row sm:flex-row-reverse ">
        <div className="left mx-2 w-2/3 h-auto  flex flex-col overflow-hidden ">
          <h2 className=" mt-3 text-blue-500   h-auto overflow-hidden ">
            Hi, I am Anand Pandey
          </h2>
          <div className=" mt-10 mx-5">
            Hi! I am Anand Pandey from Greater Noida, Uttar Pradesh. I am a
            Final year Computer Science Engineering Student . I am passionate
            about writing clean, efficient and optimized code.
          </div>
          <div className="social-links  mt-6  right  flex ">
            <a
              href='https://www.linkedin.com/in/anand-pandey-7522b81b4">'
              target="_blank"
              rel="noreferrer"
            >
              <div className=" shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ml-10 bg-blue-600 text-white">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Anandpandey0"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mx-6 bg-black text-white">
                <FaGithub />
              </div>
            </a>
          </div>
          <div className="like-button flex flex-start mt-5 mx-10 ">
            <button className="shadow-xl shadow-gray-400 bg-blue-800 cursor-pointer hover:scale-105 ease-in  duration-300 rounded-md p-2 text-white ">⭐Star My Github </button>
          </div>
        </div>
        <div className="right justify-center items-center align-center border-solid border-2 border-green-500 overflow-hidden ml-6 rounded-full w-2/5 h-2/5">
        <Image
              src={Logo}
              alt='/'
              width='100'
              height='100'
              className='cursor-pointer rounded-full mx-auto'
            />  
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
