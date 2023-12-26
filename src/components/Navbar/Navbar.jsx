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
    <div className="sticky top-0 z-30 md:static">
        <nav className="text-white flex items-center justify-end md:justify-between p-4 md:p-6">
            <div className="hidden md:flex lg:ms-6">
              <IoIosArrowBack className="text-2xl lg:text-3xl" />
              <h2 className="logo text-xl lg:text-2xl">NCMT</h2>
              <IoIosArrowForward className="text-2xl lg:text-3xl" />
            </div>

            <div className="hidden md:inline-block uppercase">
                <a href="#projects" className="nav-link md:me-7 md:text-sm lg:text-base lg:me-9">Projects</a>
                <a href="#contact" className="nav-link md:me-1 md:text-sm lg:text-base lg:me-9">Contact Me</a>
            </div>

            {/* Burger Menu */}
            <div className="md:hidden">
              <button className="text-2xl bg-rose-400 rounded-full p-2" onClick={toggleMenu}>
                  <IoMenu />
              </button>

              <motion.div
                  variants={menuVariants}
                  initial='initial'
                  animate={isOpen ? "animate" : "exit"}
                  className="absolute left-0 top-0 bg-slate-900 w-full p-5"
              >
                  <button className="text-3xl float-right" onClick={toggleMenu}>
                    <IoClose/>
                  </button>

                  <div className="flex flex-col mt-8 items-center justify-center">
                    <a href="#home" className="nav-link my-3" onClick={toggleMenu}>Home</a>
                    <a href="#projects" className="nav-link my-3" onClick={toggleMenu}>Projects</a>
                    <a href='#contact' className="nav-link mt-3 mb-6" onClick={toggleMenu}>Contact Me</a>
                  </div>
              </motion.div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar