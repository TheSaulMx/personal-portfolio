import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="bg-stone-100 flex justify-center py-6">
        <ul className="flex flex-row gap-10">
          <li className="">
            <a
              href=""
              className="hover:bg-stone-50 py-4 px-5 border border-transparent rounded-2xl transition-all duration-300"
            >
              Experiencia
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="hover:bg-stone-50 py-4 px-5 border border-transparent rounded-2xl transition-all duration-300"
            >
              Portafolio
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="hover:bg-stone-50 py-4 px-5 border border-transparent rounded-2xl transition-all duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
