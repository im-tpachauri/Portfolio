import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Tanmay Pachauri
          </p>
        </Link>

        <div className='flex items-center gap-12'>
          {/* Social Icons for desktop */}
          <div className='hidden sm:flex items-center gap-8'>
            <a 
              href="https://www.linkedin.com/in/ansh-gupta-0a2761214/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://github.com/anshgupta-007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="http://leetcode.com/u/anshguptahoney/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <SiLeetcode size={28} />
            </a>
          </div>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div className='flex flex-col gap-4'>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              
              {/* Social Icons for mobile */}
              <div className='flex gap-12 mt-2'>
                <a 
                  href="https://www.linkedin.com/in/abhi-arora-204125250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <FaLinkedin size={25} />
                </a>
                <a 
                  href="https://github.com/Abhx26" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <FaGithub size={25} />
                </a>
                <a 
                  href="https://leetcode.com/u/Abhx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <SiLeetcode size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;