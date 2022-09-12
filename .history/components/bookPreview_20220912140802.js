import Image from "next/image";

export default function bookPreview(props) {
  const { src, height, width, alt } = props;

  return (
    <div className="container">
      <Image src={`https:${src}`} height={height} width={width} alt={alt} />
      <style jsx>{`
        .container {
          border: 1px solid black;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
