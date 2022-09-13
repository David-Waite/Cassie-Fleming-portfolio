import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";

export default function Layout({ children }) {
  const [navClass, setNavClass] = useState({
    navClass: "",
    linkClass: "link",
  });
  const [copiedEmail, setCopiedEmail] = useState("email-popup");
  const router = useRouter();
  const currentRoute = router.pathname;

  function toggleNav() {
    setNavClass((navClass) => {
      return navClass.navClass === "change"
        ? {
            navClass: "",
            linkClass: "linkHidden",
          }
        : {
            navClass: "change",
            linkClass: "link",
          };
    });
  }

  function newPage() {
    setNavClass("");
  }

  function copyEmail() {
    navigator.clipboard.writeText("cassie.fleming2000@gmail.com");
    setTimeout(() => {
      setCopiedEmail("email-popup");
    }, [1000]);

    setCopiedEmail("copied");
  }

  return (
    <div className={`layout ${navClass.navClass}`}>
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
            <a
              onClick={newPage}
              className={`${currentRoute === "/" ? "active" : ""} ${
                navClass.linkClass
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/animations">
            <a
              onClick={newPage}
              className={`${currentRoute === "/animations" ? "active" : ""} ${
                navClass.linkClass
              }`}
            >
              Animations
            </a>
          </Link>
          <Link href="/illustrations">
            <a
              onClick={newPage}
              className={`${
                currentRoute === "/illustrations" ? "active" : ""
              } ${navClass.linkClass}`}
            >
              Illustrations
            </a>
          </Link>
          <Link href="/personal-works">
            <a
              onClick={newPage}
              className={`${
                currentRoute === "/personalWorks" ? "active" : ""
              } ${navClass.linkClass}`}
            >
              Personal works
            </a>
          </Link>
          <Link href="/showreel">
            <a
              onClick={newPage}
              className={`${currentRoute === "/showreel" ? "active" : ""} ${
                navClass.linkClass
              }`}
            >
              Showreel
            </a>
          </Link>
        </nav>
      </header>
      <hr className="navbar-line" />

      <div className="currentPageCon">
        <h2 className="currentPage">
          {currentRoute === "/illustrations"
            ? "Illustrations"
            : currentRoute === "/"
            ? "About"
            : currentRoute === "/animations"
            ? "Animations"
            : currentRoute === "/showreel"
            ? "Showreel"
            : currentRoute === "/personal-work"
            ? "Personal works"
            : ""}
        </h2>
      </div>

      {children}
      <footer>
        <span className={copiedEmail}>Email copied</span>
        <p className="copyright">Copyright &copy; Cassie Fleming, 2022.</p>
        <p className="copyright">All rights reserved.</p>
        <div className="social">
          <div className={`${navClass.navClass}icon`}>
            <Link href="https://www.instagram.com/cass_illustrations/">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
          <div className={`${navClass.navClass}icon`} onClick={copyEmail}>
            <EnvelopeFill />
          </div>
          <div className={`${navClass.navClass}icon`}>
            <Link href="http://www.linkedin.com/in/cassie-fleming-500a56204">
              <a target="_blank">
                <Linkedin />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
