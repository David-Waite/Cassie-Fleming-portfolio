import Link from "next/link";
import React, { useState } from "react";
import { instagram } from "bootstrap";

export default function Layout({ children }) {
  const [navClass, setNavClass] = useState("");

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
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Animations</a>
          </Link>
          <Link href="/">
            <a>Illustrations</a>
          </Link>
          <Link href="/">
            <a>Showreel</a>
          </Link>
        </nav>
      </header>
      <div className="navbar-line"></div>

      {children}
      <footer>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
        {instagram}
      </footer>
    </div>
  );
}
