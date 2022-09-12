import Link from "next/link";
import React, { useState } from "react";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";

export default function Layout({ children }) {
  const [navClass, setNavClass] = useState("");
  const [copiedEmail, setCopiedEmail] = useState("email-popup");

  function toggleNav() {
    setNavClass((navClass) => {
      return navClass === "change" ? "" : "change";
    });
  }

  function copyEmail() {
    navigator.clipboard.writeText("cassie.fleming2000@gmail.com");
    setTimeout(() => {
      setCopiedEmail("email-popup");
    }, [1000]);

    setCopiedEmail("copied");
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
            <a class="active">About</a>
          </Link>
          <Link href="/">
            <a>Animations</a>
          </Link>
          <Link href="/illustrations">
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
        <span className={copiedEmail}>Email copied</span>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
        <div className="social">
          <span>
            <Link href="https://www.instagram.com/cass_illustrations/">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </span>
          <div className="email" onClick={copyEmail}>
            <EnvelopeFill />
          </div>
          <span>
            <Link href="http://www.linkedin.com/in/cassie-fleming-500a56204">
              <a target="_blank">
                <Linkedin />
              </a>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
