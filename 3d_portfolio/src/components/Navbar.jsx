import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import style from "../constants/style";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = (() => {
    setToggle(!toggle)

    if (!toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  })

  return (
    <>
    <header
      className={`flex justify-around items-center font-poppins py-4 font-medium text-black text-smF lg:text-lgF  navbar overflow-hidden bg-gradient-to-r from-[#007aff] to-[#02baff] shadow-md fixed top-0 left-0 w-full z-10`}
    >
    
       <NavLink to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-white">
          <p className=' text-gray-800'>RS</p>
        </div>
        <span className="text-lg font-semibold text-white">Rachana Sen</span>
      </NavLink>

      <ul
        className={`lg:gap-5 cursor-pointer sm:flex hidden lg:mr-0 sm:gap-6 custom-700:hidden`}
      >
      {navLinks.map((item, index) => (
        <NavLink
        key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-white hover:text-blue-600 transition-colors'
          }
        >
          {item.title}
        </NavLink>

      
    ))}
      </ul> 
    
      <div
        onClick={toggleMenu}
        className={`h-[35px] w-[35px] bg-red ${style.flexCenter} lg:hidden sm:hidden -mr-8 rounded-full relative`}
      >
        {toggle ? (
          <IoMdClose size={18} color="#ffffff" />
        ) : (
          <AiOutlineMenu size={18} color="#ffffff" className="" />
        )}


        <nav className="flex space-x-6 text-lg">
        <ul
          className={`nike-list fixed top-20 right-0 left-0 h-full p-4 transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-1 ease lg:flex lg:flex-row lg:static lg:transform-none lg:bg-transparent gap-5 cursor-pointer flex flex-col items-center text-gray-800 z-10 bg-white`}
        >
         {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-800 hover:text-blue-600 transition-colors'
          }
          style={{ display: item.title === 'Resume' ? 'none' : 'block' }}
        >
          {item.title}
        </NavLink>
      ))}
      {/* Button for downloading resume */}
      <a href="/rachana.pdf.pdf" download className="text-gray-800 hover:text-blue-600 transition-colors ml-4">
        Download Resume
      </a>

        <div className="flex space-x-4 mt-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>

        </ul>
      </nav>
      </div>
    </header>
    </>
    
  );
};

export default Navbar 

