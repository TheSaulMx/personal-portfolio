import React, { Component } from "react";
import LinkedInIcon from "../assets/icons/linkedin-1.svg";
import GithubIcon from "../assets/icons/github-1.svg";
import ProfileImage from "../assets/profile.png";

export class PresentationCard extends Component {
  render() {
    return (
      <section>
        <div className="flex md:flex-row flex-col-reverse sm:flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20 ">
          <div className="flex flex-col max-w-xl gap-5">
            <div>
              <h1 className="text-2xl font-bold">Saúl Contreras,</h1>
              <p className="text-2xl font-bold text-wrap">
                Ingeniero en Sistemas Computacionales.
              </p>
            </div>
            <div>
              <p>+3 años de experiencia como desarrollador Full Stack.</p>
              <p>Apacionado por el desarrollo web</p>
            </div>
            <div className="flex flex-row gap-5">
              <a
                href="https://www.linkedin.com/in/saulcontreras30/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedInIcon} alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://github.com/TheSaulMx" target="_blank">
                <img src={GithubIcon} alt="Github" width={25} height={30} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <img
              className="rounded-full size-auto"
              src={ProfileImage}
              alt="Saúl Contreras"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PresentationCard;
