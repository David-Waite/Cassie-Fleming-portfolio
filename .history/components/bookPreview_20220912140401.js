import Image from "next/image";

export default function bookPreview(props) {
  const { url, height, width, alt } = props;
  console.log(url);
  console.log(height);
  console.log(width);
  console.log(alt);
  return (
    <div>
      <Image url={`http:${url}`} height={height} width={width} alt={alt} />
    </div>
  );
}
