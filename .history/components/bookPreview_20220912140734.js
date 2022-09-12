import Image from "next/image";

export default function bookPreview(props) {
  const { src, height, width, alt } = props;

  return (
    <div className="container">
      <Image src={`https:${src}`} height={height} width={width} alt={alt} />
      <style jsx>{`
        .container {
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
      `}</style>
    </div>
  );
}
