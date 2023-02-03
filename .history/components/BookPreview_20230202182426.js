import Image from "next/image";
import Link from "next/link";

export default function bookPreview(props) {
  const { src, height, width, alt, slug } = props;

  return slug ? (
    <>
      <div
        style={{ backgroundColor: "red", height: height, width: width }}
      ></div>
      <Link href={slug ? slug : ""}>
        <a>
          <Image src={`https:${src}`} height={height} width={width} alt={alt} />
          <style jsx>{`
            .container {
              box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            }
          `}</style>
        </a>
      </Link>
    </>
  ) : (
    <Image src={`https:${src}`} height={height} width={width} alt={alt} />
  );
}
