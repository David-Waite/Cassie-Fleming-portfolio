import Image from "next/image";

export default function bookPreview(props) {
  const { url, height, width, alt } = props;
  console.log(url);
  console.log(height);
  console.log(width);
  console.log(alt);
  return (
    <div>
      <hi>hi</hi>
    </div>
  );
}