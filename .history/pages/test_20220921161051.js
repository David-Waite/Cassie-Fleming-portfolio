import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={3}>
        <ParallaxLayer>
          <h1>cassie</h1>
        </ParallaxLayer>
        <ParallaxLayer>
          <img src="/sky.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={-0.3}></ParallaxLayer>

        <ParallaxLayer></ParallaxLayer>

        <ParallaxLayer></ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>

      <style jsx>{`
        .container {
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
