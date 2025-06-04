import React, { Component } from "react";
import CodeIcon from "./icons/CodeIcon";

const PROJECTS = [
  {
    title: "Proximamente...",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image: "/projects/svgl.webp",
    tags: ["Angular"],
  },
];

export default class Projects extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-4">
          <CodeIcon />
          <h2 className="text-3xl font-semibold">Proyectos</h2>
        </div>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-row gap-10 mt-10">
              <img
                className="size-8/16 rounded-xl blur"
                src="https://animated-churros-60739d.netlify.app/projects/svgl.webp"
                alt="Imagen del proyecto"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <ul>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-g fixed ray-400 border border-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </ul>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet doloremque praesentium dicta non beatae alias
                    voluptatum, magnam officiis maxime cum aspernatur
                    perspiciatis laborum molestiae atque quisquam repellendus
                    dolorem ut? Impedit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
