import Image from "next/image";

export default function Illustrations() {
  return (
    <div className="layout">
      <div>
        <Image
          src="/cherry blossom.2.jpg"
          height={725}
          width={1200}
          alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
        />
      </div>
    </div>
  );
}
