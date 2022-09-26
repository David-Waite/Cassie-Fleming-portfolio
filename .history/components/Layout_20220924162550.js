import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Layout({ children }) {
  const [navState, setNavState] = useState({
    navClass: "unChange",
    linkClass: "link",
  });
  const [copiedEmailState, setCopiedEmailState] = useState("hidden");
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

  return (
    <div>
      {currentRoute === "/" ? (
        <div className="everything">
          <div className="container">
            <Parallax className="box" pages={1.525}>
              <ParallaxLayer speed={0.1}>
                <img src="/sky.png" alt="" />
              </ParallaxLayer>

              <ParallaxLayer speed={0.1}>
                <img src="/background.png" alt="" />
              </ParallaxLayer>

              <ParallaxLayer speed={0}>
                <img src="/water2.gif" alt="" />
              </ParallaxLayer>

              <ParallaxLayer speed={0.4}>
                <img src="/foreground2.png" alt="" />
              </ParallaxLayer>
              <ParallaxLayer offset={0.5} speed={-1.9}>
                <h1>Cassie Fleming</h1>
              </ParallaxLayer>
              <ParallaxLayer speed={0.4}>
                <img src="foreground.png" alt="" />
              </ParallaxLayer>
              <ParallaxLayer offset={1.5} speed={0}>
                <>
                  <div className={`layout ${navState.navClass}`}>
                    <header className="header">
                      <div className="navbar-icon" onClick={toggleNav}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                      </div>

                      <nav>
                        <Link href="/">
                          <a
                            onClick={newPage}
                            className={`${
                              currentRoute === "/" ? "active" : ""
                            } ${navState.linkClass}`}
                          >
                            About
                          </a>
                        </Link>
                        <Link href="/showreel">
                          <a
                            onClick={newPage}
                            className={`${
                              currentRoute === "/showreel" ? "active" : ""
                            } ${navState.linkClass}`}
                          >
                            Showreel
                          </a>
                        </Link>
                        <Link href="/characterDesigns">
                          <a
                            onClick={newPage}
                            className={`${
                              currentRoute === "/characterDesign"
                                ? "active"
                                : ""
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
                            className={`${
                              currentRoute === "/animations" ? "active" : ""
                            } ${navState.linkClass}`}
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
                        Copyright &copy; Cassie Fleming, 2022.
                      </p>
                      <p className="copyright">All rights reserved.</p>
                      <div className="social">
                        <div className={`${navState.navClass}Icon`}>
                          <Link href="https://www.instagram.com/cass_illustrations/">
                            <a target="_blank">
                              <Instagram />
                            </a>
                          </Link>
                        </div>
                        <div
                          className={`${navState.navClass}Icon`}
                          onClick={copyEmail}
                        >
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
                    </footer>
                  </div>
                </>
              </ParallaxLayer>
            </Parallax>
          </div>

          <style jxs>{`
      
        img {
          width: 100%;
          height: auto;
          object-fit: contain
        }
        .container {
          width: 100vw
          height: auto;
        }
        .textstuff {
          background-color: green;
          margin: 0;
          height: 90vh;
        }
        h2 {
          z-index: 1000;
        }
        h1 {
          padding: 0;
          margin: 0;
          color: black;
          text-align: center
        }
        .everything {
          height: 100vh;
          
        }
        /*
        .box::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .box {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        */
      `}</style>
        </div>
      ) : (
        <div className={`layout ${navState.navClass}`}>
          <header className="header">
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
                  className={`${
                    currentRoute === "/animations" ? "active" : ""
                  } ${navState.linkClass}`}
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
            <p className="copyright">Copyright &copy; Cassie Fleming, 2022.</p>
            <p className="copyright">All rights reserved.</p>
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
          </footer>
        </div>
      )}
    </div>
  );
}
