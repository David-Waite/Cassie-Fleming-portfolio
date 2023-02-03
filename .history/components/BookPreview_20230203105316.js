import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookPreview(props) {
  const { src, height, width, alt, slug, title } = props;
  const [hover, setHover] = useState(false);

  return slug ? (
    <div className="containerRel">
      <Link href={slug ? slug : ""}>
        <a className="container">
          <Image src={`https:${src}`} height={height} width={width} alt={alt} />
        </a>
      </Link>
      <h2 className="title">{title}</h2>
      <style jsx>{`
        .container:hover {
          opacity: 0.3;
        }
        
        .container:hover + h2 {
          display: inline;
          
        }
        h2:hover {
          display: inline;
        }
        .containerRel {
          position: relative;
        }
        .title {
          display: none;
          position: absolute;
          bottom: 50%;
          width: 100%;
          }
        }
      `}</style>
    </div>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
