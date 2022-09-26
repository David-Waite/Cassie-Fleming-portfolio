import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";

export default function Layout({ children }) {
  const [navState, setNavState] = useState({
    navClass: "unChange",
    linkClass: "link",
  });
  const [copiedEmailState, setCopiedEmailState] = useState("hidden");
  const [duckQuacking, setDuckQuackng] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  function toggleNav() {
    setNavState((navState) => {
      return navState.navClass === "change"
        ? {
            navClass: "unChange",
            linkClass: "linkHidden",
          }
        : {
            navClass: "change",
            linkClass: "link",
          };
    });
  }

  function newPage() {
    setNavState({
      navClass: "unChange",
      linkClass: "link",
    });
  }

  function copyEmail() {
    navigator.clipboard.writeText("cassie.fleming2000@gmail.com");
    setTimeout(() => {
      setCopiedEmailState("hidden");
    }, [1000]);

    setCopiedEmailState("shown");
  }

  function duckClick() {
    setTimeout(() => {
      setDuckQuacking(true);
    }, [1917]);
    setDuckQuacking(false);
  }
  return (
    <div>
      <div className={`layout ${navState.navClass}`}>
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
                  navState.linkClass
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/showreel">
              <a
                onClick={newPage}
                className={`${currentRoute === "/showreel" ? "active" : ""} ${
                  navState.linkClass
                }`}
              >
                Showreel
              </a>
            </Link>
            <Link href="/characterDesigns">
              <a
                onClick={newPage}
                className={`${
                  currentRoute === "/characterDesign" ? "active" : ""
                } ${navState.linkClass}`}
              >
                Character design
              </a>
            </Link>
            <Link href="/illustrations">
              <a
                onClick={newPage}
                className={`${
                  currentRoute === "/illustrations" ? "active" : ""
                } ${navState.linkClass}`}
              >
                Illustrations
              </a>
            </Link>
            <Link href="/animations">
              <a
                onClick={newPage}
                className={`${currentRoute === "/animations" ? "active" : ""} ${
                  navState.linkClass
                }`}
              >
                Animations
              </a>
            </Link>

            <Link href="/personal-works">
              <a
                onClick={newPage}
                className={`${
                  currentRoute === "/personalWorks" ? "active" : ""
                } ${navState.linkClass}`}
              >
                Personal works
              </a>
            </Link>

            <hr className="navbar-line navbarLineFull" />
          </nav>
        </header>
        <hr className="navbar-line navbarLineMobile" />

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
              : currentRoute === "/personal-works"
              ? "Personal works"
              : currentRoute === "/characterDesigns"
              ? "Character design"
              : ""}
          </h2>
        </div>

        {children}
        <footer>
          <span className={`copiedEmail ${copiedEmailState}`}>
            Email copied
          </span>
          <p className="copyright">
            Copyright &copy; Cassie Fleming, 2022. <br />
            All rights reserved.
          </p>

          <div className="social">
            <div className={`${navState.navClass}Icon`}>
              <Link href="https://www.instagram.com/cass_illustrations/">
                <a target="_blank">
                  <Instagram />
                </a>
              </Link>
            </div>
            <div className={`${navState.navClass}Icon`} onClick={copyEmail}>
              <EnvelopeFill />
            </div>
            <div className={`${navState.navClass}Icon`}>
              <Link href="http://www.linkedin.com/in/cassie-fleming-500a56204">
                <a target="_blank">
                  <Linkedin />
                </a>
              </Link>
            </div>
          </div>
          <div>
            <img
              onClick={duckClick}
              className="duck"
              src={duckQuacking ? "/duckQuacking.gif" : "duckBlinking.gif"}
              alt=""
            />
            <img
              className={`${duckQuacking ? "quackOff" : "quackOn"}`}
              src="/quack.png"
              alt=""
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
