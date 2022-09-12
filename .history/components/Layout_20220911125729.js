import Link from "next/link";

export default function Layout({ children }) {
  let navIconClass = "";
  function toggleNav() {
    let navIconClass = "change";
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
      <div class="navbar-icon" onclick={toggleNav()}>
        <div class={`bar1 ${navIconClass}`}></div>
        <div class={`bar2 ${navIconClass}`}></div>
        <div class={`bar3 ${navIconClass}`}></div>
      </div>
      {children}
      <footer>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
