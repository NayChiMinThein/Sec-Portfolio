import ecommerce from "../../images/fakestore.png"
import baydin from "../../images/baydin.png"
import restuarant from "../../images/restuarant.png"
import dashboard from "../../images/dashboard.png"
import { FaGithub } from "react-icons/fa6";
import { RiShareBoxFill } from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: 'Ecommerce App',
    text: 'Mini e-commerce app built with React & Redux Toolkit, powered by FakeStore API. Responsive & packed with features!',
    img_url: ecommerce,
    github_url: "https://github.com/NayChiMinThein/Fake-Store-Ivishop",
    demo_url: "https://fake-store-ivishop.vercel.app/"
  },
  {
    id: 2,
    title: 'MinTheinKha BayDin',
    text: 'Baydin app, crafted with React, Tailwind CSS, and React Router for a seamless user experience across all devices.',
    img_url: baydin,
    github_url: "https://github.com/NayChiMinThein/MinTheinKha-LatHtaukBayDin",
    demo_url: "https://min-thein-kha-lat-htauk-bay-din.vercel.app/"
  },
  {
    id: 3,
    title: 'Restaurant Website',
    text: 'Exquisite restaurant website inspired by W3Schools template, elegantly crafted with HTML and CSS mastery.',
    img_url: restuarant,
    github_url: "https://github.com/NayChiMinThein/Template-Practice-2",
    demo_url: "https://restuarant-website-refby-w3schools.netlify.app/"
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    text: "This dashboard blended React with Tailwind CSS for the interface, used Material-UI tables for data display, and Recharts for charts. (Not Responsive)",
    img_url: dashboard,
    github_url: "https://github.com/NayChiMinThein/Template-Practice-2",
    demo_url: "https://ivisadmin-dashboard.vercel.app/"
  }
]

function Projects() {
  return (
    <section className="text-white mx-6 md:mx-12 lg:mx-32 pt-4" id="projects">
      <h2 className="text-center text-xl lg:text-3xl uppercase mb-10 md:mb-14 lg:mb-16">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-9">
        {projects.map(project => {
          return (
            <div key={project.id}>
              <h5 className="text-sm lg:text-base text-center">{project.title}</h5>
              <div className="mt-2 rounded-md bg-rose-100 p-3">
                <a href={project.demo_url} target="_blank" rel="noreferrer">
                  <img src={project.img_url} alt={project.title} className="rounded-md"/>
                </a>
              </div>
              <p className="text-xs lg:text-sm mt-2">
                {project.text}
              </p>
              <div className="flex items-center mt-3">
                <a href={project.github_url} className="md:hover:scale-110" target="_blank" rel="noreferrer">
                  <FaGithub className="text-lg lg:text-xl xl:text-2xl"/>
                </a>
                <a href={project.demo_url} className="ms-3 md:hover:scale-110" target="_blank" rel="noreferrer" title="Live View">
                  <RiShareBoxFill className="text-xl lg:text-xl xl:text-2xl"/>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects