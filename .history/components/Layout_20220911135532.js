import Link from "next/link";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [navClass, setNavClass] = useState("");
  const [isHovering, setisHovering] = useState("");

  function handleMouseEnter() {
    setisHovering("hover");
  }

  function handleMouseLeave() {
    setisHovering("");
  }
  function toggleNav() {
    setNavClass((navClass) => {
      return navClass === "change" ? "" : "change";
    });
  }

  return (
    <div className={`layout ${navClass}`}>
      <header className="header">
        <h1>
          <Link href="/">
            <a>Cassie Fleming</a>
          </Link>
        </h1>

        <div className="navbar-icon" onClick={toggleNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <nav>
          <Link href="/">
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              About
            </a>
          </Link>
          <Link href="/">
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Animations
            </a>
          </Link>
          <Link href="/">
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Illustrations
            </a>
          </Link>
          <Link href="/">
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Showreel
            </a>
          </Link>
        </nav>
      </header>
      <div className="navbar-line"></div>

      {children}
      <footer>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
