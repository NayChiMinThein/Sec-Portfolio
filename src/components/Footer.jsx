import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="text-white text-center mt-16 mb-10 md:mt-20 lg:mt-24 lg:mb-12 mx-6" id="contact">
      <h4 className="text-sm lg:text-base xl:text-lg mb-4 lg:mb-5 font-medium">
        You can contact me from my social media accounts & email.
      </h4>
      <div className="flex items-center justify-center">
        <a href="https://www.facebook.com/profile.php?id=100016329197745"
          className="me-6 lg:me-8 text-2xl lg:text-3xl md:hover:scale-110"
          target="_blank" rel="noreferrer">
            <FaFacebook/>
        </a>
        <a href="https://www.instagram.com/naychiz_01/"
          className="me-6 lg:me-8 text-2xl lg:text-3xl md:hover:scale-110"
          target="_blank" rel="noreferrer">
          <FaInstagram/>
        </a>
        <a href="https://github.com/NayChiMinThein"
          className="me-6 lg:me-8 text-2xl lg:text-3xl md:hover:scale-110"
          target="_blank" rel="noreferrer">
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/nay-chi-min-thein-a85bbb2a7/"
          className="me-6 lg:me-8 text-2xl lg:text-3xl md:hover:scale-110"
          target="_blank" rel="noreferrer">
          <FaLinkedin/>
        </a>
        <a href="mailto:naychiminthein494@gmail.com"
          className="text-2xl lg:text-3xl md:hover:scale-110"
          target="_blank" rel="noreferrer">
          <IoMailOutline/>
        </a>
      </div>
    </footer>
  )
}

export default Footer