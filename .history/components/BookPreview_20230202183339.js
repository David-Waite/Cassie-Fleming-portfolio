import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function bookPreview(props) {
  const { src, height, width, alt, slug, title } = props;
  const [hover, setHover] = useState[false];

  return slug ? (
    <>
      <Link href={slug ? slug : ""}>
        <a className="container">
          <Image src={`https:${src}`} height={height} width={width} alt={alt} />
          <style jsx>{`
            .container:hover {
              opacity: 0.6;
            }
          `}</style>
        </a>
      </Link>
      <h1>{title}</h1>
    </>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
