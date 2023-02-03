import Image from "next/image";
import Link from "next/link";

export default function bookPreview(props) {
  const { src, height, width, alt, slug, title } = props;

  return slug ? (
    <Link href={slug ? slug : ""}>
      <a className="container">
        <Image src={`https:${src}`} height={height} width={width} alt={alt} />
        <style jsx>{`
          .container:hover {
            opacity: 0.6;
          }
        `}</style>
      </a>
      title={thumbnailArray[i].fields.title}
    </Link>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}