/* eslint-disable react/no-unescaped-entities */
import html from "../../images/html.png"
import css from "../../images/css.png"
import bootstrap from "../../images/bootstrap.png"
import tailwind from "../../images/tailwind.svg"
import js from "../../images/js.png"
import react from "../../images/react.png"
import redux from "../../images/redux.svg"
import git from "../../images/git.svg"
import github from "../../images/github.svg"

const skills = [
  {
    id: 1,
    name: 'html',
    img_url: html
  },
  {
    id: 2,
    name: 'css',
    img_url: css
  },
  {
    id: 3,
    name: 'bootstrap',
    img_url: bootstrap
  },
  {
    id: 4,
    name: 'tailwind',
    img_url: tailwind
  },
  {
    id: 5,
    name: 'js',
    img_url: js
  },
  {
    id: 6,
    name: 'react',
    img_url: react
  },
  {
    id: 7,
    name: 'redux',
    img_url: redux
  },
  {
    id: 8,
    name: 'git',
    img_url: git
  },
  {
    id: 9,
    name: 'github',
    img_url: github
  }
]

function About() {
  return (
    <section className="text-white mx-6 md:mx-12 lg:mx-32">
      <div>
        <h2 className="text-xl lg:text-3xl text-center mb-8 lg:mb-9 uppercase">
          About Me
        </h2>
        <p className="text-sm lg:text-base font-light tracking-wide leading-6 lg:leading-8">
          Hi there, my name is Nay Chi Min Thein and I'm a front-end developer based in Myanmar. I have a strong passion for anything web releated, mostly front-end developing and enjoy creating visually appealing and user-friendly websites. I'm dedicated to continuously learning and staying up-to-date with the latest trends and technologies in the field. Looking forward to collaborating on exciting projects in the future.
        </p>
      </div>

      <div className="mt-12 md:mt-14 lg:mt-20">
        <h2 className="text-center tracking-wide text-xl">What Skills I Have</h2>
        <div className="mt-9 md:mt-12 lg:mt-16 grid grid-cols-3 gap-9 md:gap-12 lg:gap-20">
          {skills.map(skill => {
            return (
              <div className="" key={skill.id}>
                <img src={skill.img_url} alt={skill.name} className="w-10 md:w-12 lg:w-16 block mx-auto" />
              </div>
            )
          })}
        </div>
      </div>
      <hr className="my-14 md:my-24 lg:my-40" />
    </section>
  )
}

export default About