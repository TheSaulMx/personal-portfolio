import React, { Component } from "react";
import LinkedInIcon from "../../assets/icons/linkedin-1.svg";
import ProfileImage from "../../assets/profile.png";

export class PresentationCard extends Component {
  render() {
    return (
      <section className="section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <div className="flex flex-col max-w-xl gap-2">
          <div className="flex items-center gap-10">
            <img
              className="rounded-full size-25"
              src={ProfileImage}
              alt="Saúl Contreras"
            />
            <a href="https://www.linkedin.com/in/saulcontreras30/">
              <img src={LinkedInIcon} alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-700">
              Saúl Contreras,
            </h1>
            <p className="text-2xl font-bold text-stone-700">
              Ingeniero en Sistemas Computacionales.
            </p>
          </div>
          <p>
            Cuento con más +3 años de experiencia como desarrollador Full Stack.
          </p>
        </div>
      </section>
    );
  }
}

export default PresentationCard;
