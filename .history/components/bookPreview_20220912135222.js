import Image from "next/image";

export default function bookPreview(props) {
  const { src, height, width, alt } = props;
  console.log(src);
  console.log(height);
  console.log(width);
  console.log(alt);
  return (
    <div>
      <hi>hi</hi>
    </div>
  );
}
