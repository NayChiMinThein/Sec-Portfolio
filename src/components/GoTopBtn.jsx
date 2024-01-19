import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const GoTopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

  return (
    showTopBtn && (
        <a href="#home">
            <button className="md:fixed bottom-6 right-3 lg:bottom-7 lg:right-4 xl:bottom-8 xl:right-12 text-amber-500 
                text-2xl lg:text-3xl xl:text-4xl">
                <FaCircleArrowUp/>
            </button>
        </a>
    )
  )
}

export default GoTopBtn