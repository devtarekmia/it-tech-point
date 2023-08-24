import React, { useRef, useState } from 'react';
import logo from '../logo.svg';
import { HiMenuAlt4, HiX, HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';
function Navbar() {

  const [menuOpen, setMenu] = useState(false);
  const [navBg, setBg] = useState(false);
  const [navShow, setShow] = useState(true);
  const [footBtnShow, setFoot] = useState(false);
  const { scrollYProgress } = useScroll();
  const previousScrollYProgressRef = useRef(0);
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.10) {
      setBg(false);
      setShow(true);
      setFoot(false)
    } else if (latest > 0.10 && latest < previousScrollYProgressRef.current) {
      // Scrolling downward
      setBg(true);
      setShow(true);
      setFoot(true)
      previousScrollYProgressRef.current = latest;
    } else if (latest > 0.10 && latest > previousScrollYProgressRef.current) {
      // Scrolling upward
      setShow(false);
      previousScrollYProgressRef.current = latest;
      setFoot(false)
    }
  })

  const navlinks = [
    {
      path: 'about',
      name: 'Who we are',
    },
    {
      path: 'services',
      name: 'Services',
    },
    {
      path: 'clients',
      name: 'Our clients',
    },
    {
      path: 'contact',
      name: 'Contact Us',
    }
  ]

  return (
    <>
      <nav className={'fixed left-0 right-0 z-10 transition-all duration-1000' + (navShow ? ' top-0' : ' -top-52') + (navBg ? ' bg-white shadow-sm drop-shadow-sm dark:bg-gray-900 dark:shadow-slate-700 dark:text-neutral-50' : ' text-neutral-50')}>
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className='w-full max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-4'>

          <Link to="home" smooth={true} duration={500} className='cursor-pointer flex items-center'>
            <img src={logo} className="h-8 mr-3" alt="IT Tech Point" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap py-3">IT Tech Point</span>
          </Link>

          <div className="lg:hidden order-2">
            <button className="flex items-center dark:text-blue-600 p-3" onClick={toggleMenu}>
              <HiMenuAlt4 className='text-2xl navbtn hover:text-blue-600 dark:hover:text-neutral-50' />
            </button>
          </div>
          <ul className={`hidden ms-auto text-center lg:flex lg:space-x-12 lg:me-12`}>
            {navlinks.map((item, i) => (
              <li key={i} className='navbtn'>
                <Link to={item.path} smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600 text-sm font-semibold dark:text-blue-600 transition-all duration-150'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="get-quote" duration={500} smooth={true} className="hidden sm:inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 ms-auto lg:ms-0 me-4 order-1 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer capitalize transition-all duration-150">request qoute</Link>

        </motion.div>
      </nav>
      <div
        className={`${menuOpen ? 'left-0 ' : '-left-[100vw] '} navbar-menu fixed top-0 bottom-0 z-50`}>
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
        )}

        <motion.div
          initial={{ left: '-100vw' }}
          animate={{ left: menuOpen ? 0 : '-100vw' }}
          transition={{ type: 'tween', duration: .3 }}
          className={` fixed top-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 text-slate-900 dark:text-neutral-50 bg-white dark:bg-gray-900 border-r dark:border-slate-700 overflow-y-auto`}>
          <div className="flex items-center justify-between mb-8">
            <Link to="home" smooth={true} duration={500} className='cursor-pointer flex items-center' onClick={closeMenu}>
              <img src={logo} className="h-8 mr-3" alt="IT Tech Point" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">IT Tech Point</span>
            </Link>

            <button className="navbar-close" onClick={closeMenu}>
              <HiX className='text-2xl hover:text-blue-600 dark:text-blue-600 dark:hover:text-neutral-50' />
            </button>
          </div>
          <div>
            <ul>
              {navlinks.map((item, i) => (
                <li key={i} className='mb-1'>
                  <Link to={item.path} smooth={true} duration={500} className='block p-4 font-semibold dark:font-normal text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 rounded' onClick={closeMenu}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="get-quote" duration={500} smooth={true} className="inline-flex sm:hidden justify-center rounded-lg text-sm font-semibold py-2 px-4 lg:ms-0 mt-8 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer capitalize transition-all duration-150" onClick={closeMenu}>request qoute</Link>

        </motion.div>
      </div>
      <div className={`${footBtnShow ? 'bottom-14' : '-bottom-40'} fixed z-[99] right-8 2xl:right-14 transition-all duration-1000`}>
        <Link to="home" smooth={true} duration={500} className='relative rounded-full mx-auto object-cover cursor-pointer grayscale text-blue-600 hover:grayscale-0'>
          <HiOutlineChevronDoubleUp className='navbtn block text-xl animate-bounce hover:animate-none transition-all duration-300' />
        </Link>
      </div>
    </>
  );
}

export default Navbar;