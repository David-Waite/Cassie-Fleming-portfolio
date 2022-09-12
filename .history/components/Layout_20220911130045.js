import Link from "next/link";

export default function Layout({ children }) {
  let navIconClass = "";
  function toggleNav() {
    console.log("toggled");
    navIconClass = "change";
  }
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link href="/">
            <a>Cassie Fleming</a>
          </Link>
        </h1>

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
      <div className={`navbar-icon ${navIconClass}`} onClick={toggleNav}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {children}
      <footer>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
