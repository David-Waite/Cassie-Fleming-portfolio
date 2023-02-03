import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function bookPreview(props) {
  const { src, height, width, alt, slug, title } = props;
  const [hover, setHover] = useState(false);

  return slug ? (
    <>
      <Link href={slug ? slug : ""}>
        <a className="container">
          <Image src={`https:${src}`} height={height} width={width} alt={alt} />
        </a>
      </Link>
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .container:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
