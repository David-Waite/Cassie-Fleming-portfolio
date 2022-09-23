import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={3}></Parallax>

      <style jsx>{`
        .container {
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
