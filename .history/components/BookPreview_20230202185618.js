import Image from "next/image";
import Link from "next/link";

export default function bookPreview(props) {
  const { src, height, width, alt, slug, title } = props;

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
          opacity: 0.6;
        }
        .container:hover + h2 {
          display: none;
        }
        .containerRel {
          position: relative;
        }
        .title {
          margin-top: -200px
         text-align: center;
          }
        }
      `}</style>
    </div>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}