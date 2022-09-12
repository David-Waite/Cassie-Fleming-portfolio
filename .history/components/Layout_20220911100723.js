import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>Cassie Fleming</h1>
          </a>
        </Link>

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

      {children}
      <footer>
        <p>Copyright &copy; Cassie Fleming, 2022.</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
