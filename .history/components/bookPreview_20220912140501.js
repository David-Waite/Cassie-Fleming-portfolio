import Image from "next/image";

export default function bookPreview(props) {
  const { url, height, width, alt } = props;
  console.log(url);
  console.log(height);
  console.log(width);
  console.log(alt);
  return (
    <div>
      <Image
        url={`https://images.ctfassets.net/agrr167dqftk/66OGJqzLrGbozLhMjj46yR/9eb193784df57b74f40adffb6c547fa6/Screenshot__252_-min.png`}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  );
}
