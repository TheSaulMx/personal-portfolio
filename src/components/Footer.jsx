import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex justify-center items-center py-3 bottom-0 z-10 w-full bg-gray-50 dark:bg-gray-950">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Saúl Contreras.
        </p>
      </footer>
    );
  }
}
