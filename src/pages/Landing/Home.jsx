/* eslint-disable react/no-unescaped-entities */
import myPhoto from "../../images/sefile-removebg.png"
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
import "./Home.css";

const textVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', stiffness: 70, delay: 0.5, duration: 3
    }
  }
}

const imgVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', stiffness: 70, delay: 0.3, duration: 3
    }
  }
}

function Home() {
  return (
    <section className="pt-14 md:pt-0 mx-6 md:mt-20 md:mx-12 lg:mt-32 lg:mx-32" id="home">
      <div className="flex flex-col-reverse items-center md:grid md:grid-cols-2 md:mt-3">
        <motion.div
          className="mt-6"
          variants={textVariants}
          initial='hidden'
          animate='visible'>
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl mb-3">Nay Chi Min Thein</h1>
            <p className="text-lg lg:text-xl xl:text-2xl">Front-End Developer</p>
          </div>
          <div className="text-rose-300 mt-4">
            <a className="flex items-center justify-center text-sm lg:text-base my-3">
              <FaPhoneAlt className="me-2"/>
              09769-394-623
            </a>
            <a href="mailto:naychiminthein494@gmail.com"
              className="flex items-center justify-center text-sm lg:text-base hover:underline">
              <IoMail className="text-lg me-2"/>
              naychiminthein494@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:relative md:ms-12 lg:ms-28 xl:ms-40"
          variants={imgVariants}
          initial='hidden'
          animate='visible'>
          <div className="md:relative md:border md:border-white md:w-60 xl:w-64 md:h-72 xl:h-80 md:rounded-t-full"></div>
          <div className="md:absolute md:top-10 md:left-10">
            <img src={myPhoto} className="rounded-t-full w-60 lg:w-64" />
          </div>
        </motion.div>
      </div>
      <hr className="my-10 md:my-32 lg:my-40" />
    </section>
  )
}

export default Home