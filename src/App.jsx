import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/AboutMe/About";
import Home from "./pages/Landing/Home";
import Projects from "./pages/MyProjects/Projects";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div className="App">
      {loading ? <Preloader/> : 
        <>
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Footer/>
        </>
      }
    </div>
  )
}