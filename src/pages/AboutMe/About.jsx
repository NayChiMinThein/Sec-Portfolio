/* eslint-disable react/no-unescaped-entities */
import html from "../../images/skills/html.png"
import css from "../../images/skills/css.png"
import bootstrap from "../../images/skills/bootstrap.png"
import tailwind from "../../images/skills/tailwind.svg"
import js from "../../images/skills/js.png"
import react from "../../images/skills/react.png"
import git from "../../images/skills/git.svg"
import github from "../../images/skills/github.svg"
import proudCoder from "../../images/proudCoder.svg";

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
    name: 'git',
    img_url: git
  },
  {
    id: 8,
    name: 'github',
    img_url: github
  }
]

function About() {
  return (
    <section className="text-white mx-8 pt-8 md:mx-12 md:pt-12 lg:mx-16 xl:mx-32" id="aboutMe">
      <div>
        <img src={proudCoder} className="w-40 md:w-44 xl:w-52 mx-auto" />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center my-8 lg:my-9 xl:my-10 uppercase font-semibold">
            About <span className="text-amber-500"> Me</span>
          </h2>
          <p className="text-sm md:text-base xl:text-xl md:mx-8 leading-6 md:leading-8 xl:leading-10 md:text-center">
            Hi there, my name is Nay Chi Min Thein and I'm a front-end developer based in Myanmar. I have a strong passion for anything web releated, mostly front-end developing and enjoy creating visually appealing and user-friendly websites. I'm dedicated to continuously learning and staying up-to-date with the latest trends and technologies in the field. Looking forward to collaborating on exciting projects in the future.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-center font-medium text-lg lg:text-xl xl:text-2xl my-12 md:my-14 lg:my-16 xl:my-20">
          What <span className="text-amber-500">Skills</span> I Have
        </h2>
        <div className="grid grid-cols-3 gap-9 md:gap-12 lg:gap-20">
          {skills.map(skill => {
            return (
              <div key={skill.id}>
                <img src={skill.img_url} alt={skill.name} className="w-10 md:w-12 lg:w-16 xl:w-20 block mx-auto" />
              </div>
            )
          })}
        </div>
      </div>
      <hr className="my-16 md:my-28" />
    </section>
  )
}

export default About