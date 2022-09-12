import Link from "next/link";

export default function Layout() {
  <>
    <Link href="/">
      <a>
        <h1>Cassie Fleming</h1>
      </a>
    </Link>

    <nav>
      <Link href="/">
        <a>About</a>
      </Link>
    </nav>
  </>;
}
