import Image from "next/image";
import Link from "next/link";

export default function bookPreview(props) {
  const { src, height, width, alt, slug } = props;

  return slug ? (
    <Link href={slug ? slug : ""}>
      <a className="container">
        <Image src={`https:${src}`} height={height} width={width} alt={alt} />
        <style jsx>{`
          .container:hover {
            opacity: 0.9;
          }
        `}</style>
      </a>
    </Link>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
