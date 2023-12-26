import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/AboutMe/About";
import Home from "./pages/Landing/Home";
import Projects from "./pages/MyProjects/Projects";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}