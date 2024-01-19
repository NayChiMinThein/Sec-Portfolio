/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { useState } from "react";
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState)
  }

  const menuVariants = {
    initial: {
    y: '-100%',
    opacity: 0
    },
    animate: {
    y: 0,
    opacity: 1,
    transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
    }
    },
    exit: {
    y: '-100%',
    opacity: 0,
    transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
    }
    }
  };

  return (
    <nav className="sticky top-0 z-10 md:static text-white p-4 md:py-7 xl:py-9">
      <div className="hidden md:flex md:justify-between md:items-center md:mx-4 lg:mx-8 xl:mx-20">
        <div className="flex">
          <IoIosArrowBack className="text-3xl xl:text-4xl text-amber-500" />
          <h2 className="logo text-2xl xl:text-3xl">NCMT</h2>
          <IoIosArrowForward className="text-3xl xl:text-4xl text-amber-500" />
        </div>

        <div className="uppercase font-semibold">
          <a href="#aboutMe" className="nav-link md:me-7 md:text-sm xl:text-base lg:me-9">About</a>
          <a href="#projects" className="nav-link md:me-7 md:text-sm xl:text-base lg:me-9">Projects</a>
          <a href="#contact" className="nav-link md:me-2 md:text-sm xl:text-base">Contact Me</a>
        </div>
      </div>

      {/* Burger Menu */}
      <div className="float-right md:hidden">
        <button className="text-2xl bg-purple-500 rounded-full p-2" onClick={toggleMenu}>
          <IoMenu />
        </button>

        <motion.div
          variants={menuVariants}
          initial='initial'
          animate={isOpen ? "animate" : "exit"}
          className="absolute left-0 top-0 bg-slate-100 text-purple-500 w-full p-5 min-h-screen"
        >
          <button className="text-3xl float-right" onClick={toggleMenu}>
            <IoClose/>
          </button>

          <div className="flex flex-col items-center justify-center mt-40 text-lg font-medium">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#aboutMe" className="my-7" onClick={toggleMenu}>About Me</a>
            <a href="#projects" className="mb-7" onClick={toggleMenu}>Projects</a>
            <a href='#contact' onClick={toggleMenu}>Contact Me</a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar