/* eslint-disable react/no-unescaped-entities */
import myPhoto from "../../images/myPic.png"
import resume from "../../images/Resume.pdf"
import { motion } from 'framer-motion'
import { FiSend } from "react-icons/fi";

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
    <section className="mx-8 pt-8 md:mx-12 md:pt-12 lg:mx-16 xl:mx-32" id="home">
      <div className="flex flex-col-reverse items-center md:grid md:grid-cols-2">
        <motion.div
          className="md:ms-8 lg:mx-auto"
          variants={textVariants}
          initial='hidden'
          animate='visible'>
          <div className="text-white text-center md:text-left">
            <p className="text-lg lg:text-xl xl:text-2xl font-semibold">Hello, My name is</p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl uppercase font-semibold my-2 lg:my-3 xl:my-4 text-amber-500">
              Nay Chi Min Thein,
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl font-semibold">I'm a Junior Front-End Developer.</p>
          </div>

          <div className="mt-5 xl:mt-6 text-sm lg:text-base text-center md:text-left">
            <button className="bg-amber-500 font-bold py-2 px-4 rounded-full me-5">
              <a href={resume} download="NCMTResume.pdf">
                Download CV
              </a>
            </button>
            <button className="border border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full">
              <a href="mailto:naychiminthein494@gmail.com"
                className="flex items-center"
                target="_blank" rel="noreferrer">
                Let's talk <FiSend className="ms-2 text-lg xl:text-xl"/>
              </a>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="ms-4 md:ms-5 lg:mx-auto"
          variants={imgVariants}
          initial='hidden'
          animate='visible'>
          <img src={myPhoto} className="w-80 xl:w-96" />
        </motion.div>
      </div>
      <hr className="my-12 md:my-20" />
    </section>
  )
}

export default Home