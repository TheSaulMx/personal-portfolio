import React, { Component } from "react";
import PortfolioBagIcon from "../assets/icons/portfolio-bag.svg";
import PortfolioIcon from "./icons/Portfolio";

export default class WorkExperience extends Component {
  WORKEXPERIENCIE = [
    {
      companyName: "AutoTransportes DelReal",
      position: "Desarrollador Web",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequatur voluptates doloremque. Ex corrupti cum quibusdam maxime odit, quo, quam fuga officiis dolorum illum minus eius quas soluta nam ad.",
      timeWorked: "Agosto 2022 - Actualmente...",
    },
    {
      companyName: "BB4 Software",
      position: "Practicante Desarrollador Web",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequatur voluptates doloremque. Ex corrupti cum quibusdam maxime odit, quo, quam fuga officiis dolorum illum minus eius quas soluta nam ad.",
      timeWorked: "Agosto 2021 - Julio 2022",
    },
  ];

  render() {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center mb-10">
          <PortfolioIcon />
          <h2 className="text-3xl font-semibold">Experiencia laboral</h2>
        </div>
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          {this.WORKEXPERIENCIE.map((work, index) => (
            <li key={index} class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {work.timeWorked}
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {work.companyName}
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {work.responsibilities}
              </p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
