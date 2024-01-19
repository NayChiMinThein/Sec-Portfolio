import ecommerce from "../../images/projects/fakestore.png"
import baydin from "../../images/projects/baydin.png"
import dashboard from "../../images/projects/dashboard.png"
import months from "../../images/projects/months.png"
import randomG from "../../images/projects/randomG.png"
import recipes from "../../images/projects/recipes.png"

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
    title: 'Admin Dashboard',
    text: "This dashboard blended React with Tailwind CSS for the interface, used Material-UI tables for data display, and Recharts for charts. (Not Responsive)",
    img_url: dashboard,
    github_url: "https://github.com/NayChiMinThein/Admin-Dashboard",
    demo_url: "https://ivisadmin-dashboard.vercel.app/"
  },
  {
    id: 4,
    title: 'Myanmar 12 Months',
    text: "Explore the unique charm of Myanmar each month - flowers, festivities, and history, all in an engaging, easy-to-navigate guide created with React and Tailwind CSS.",
    img_url: months,
    github_url: "https://github.com/NayChiMinThein/Myanmar-Months",
    demo_url: "https://myanmar12months-bync.netlify.app/"
  },
  {
    id: 5,
    title: 'Burmese Recipes',
    text: "Delve into Burmese culinary delights with our collection of 60 recipes, featuring detailed preparation steps and ingredients, all beautifully designed with React and Tailwind CSS.",
    img_url: recipes,
    github_url: "https://github.com/NayChiMinThein/Burmese-Recipes",
    demo_url: "https://burmese-recipes-delta.vercel.app/"
  },
  {
    id: 6,
    title: 'Random Generators',
    text: "Discover a world of jokes, quotes, and surprises with our sleek and easy-to-use generator, powered by ReactJS and Tailwind CSS.",
    img_url: randomG,
    github_url: "https://github.com/NayChiMinThein/Random-Generator",
    demo_url: "https://random-generator-rho.vercel.app/"
  },
]

function Projects() {
  return (
    <section className="text-white mx-8 pt-8 md:mx-12 md:pt-12 lg:mx-16 xl:mx-32" id="projects">
      <h2 className="text-center font-semibold text-xl lg:text-3xl uppercase mb-10 md:mb-14 lg:mb-16">
        My <span className="text-amber-500"> Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        {projects.map(project => {
          return (
            <div className="text-white bg-purple-950 border border-amber-500 p-4 md:p-5 xl:p-6 rounded-md" key={project.id}>
              <a href={project.demo_url}>
                <img className="rounded-md" src={project.img_url} alt={project.title} />
              </a>
              <div className="mt-3 lg:mt-4">
                <h5 className="mb-2 text-lg lg:text-xl xl:text-2xl font-semibold">{project.title}</h5>
                <p className="text-sm lg:text-base font-medium">{project.text}</p>
                <div className="mt-4 xl:mt-4 text-sm">
                  <button className="border border-amber-500 text-amber-500 font-semibold py-1 px-2 rounded-full me-5 
                  md:hover:bg-amber-500 md:hover:text-black">
                    <a href={project.github_url} target="_blank" rel="noreferrer">Source Code</a>
                  </button>
                  <button className="border border-amber-500 text-amber-500 font-semibold py-1 px-2 rounded-full 
                  md:hover:bg-amber-500 md:hover:text-black">
                    <a href={project.demo_url} target="_blank" rel="noreferrer">Live Demo</a>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects