import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookPreview(props) {
  const { src, height, width, alt, slug, title } = props;
  const [hover, setHover] = useState(true);
  function handleHover(value) {
    setHover(value);
  }
  return slug ? (
    <div className="containerRel">
      <Link href={slug ? slug : ""}>
        <a
          className="container"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <Image src={`https:${src}`} height={height} width={width} alt={alt} />
        </a>
      </Link>
      {hover && (
        <>
          <h2
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="title"
          >
            {title}
          </h2>
          <div
            className="dimmer"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          ></div>
        </>
      )}

      <style jsx>{`
        .dimmer {
          position: absolute;
          background-color: black;
          width: 100%;
          height: calc(100% - 4px);
          opacity: 0.5;
          
        
        }
        .containerRel {
          position: relative;
        }
        .title {
          position: absolute;
          bottom: 50%;
          width: 100%;
          color: white;
          z-index: 1;
          font-weight: 100;
          
          }
        }
      `}</style>
    </div>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
