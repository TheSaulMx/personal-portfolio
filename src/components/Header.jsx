import React, { Component } from "react";

export class Header extends Component {
  LINKS = [
    {
      title: "Experiencia",
      link: "#experiencia",
    },
    {
      title: "Proyectos",
      link: "#proyectos",
    },
    {
      title: "Contacto",
      link: "#contacto",
    },
  ];
  //bg-white dark:bg-gray-900
  render() {
    return (
      <header className="flex justify-center backdrop-filter backdrop-blur-sm items-center py-7.5 fixed top-0 z-10 w-full">
        <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-600 dark:border-gray-600 ">
          <div className="flex flex-row justify-center gap-4">
            {this.LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="hover:underline py-4 px-5 border border-transparent rounded-2xl transition-all duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
