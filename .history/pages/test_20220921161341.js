import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={1}>
        <ParallaxLayer>
          <h1>cassie</h1>
        </ParallaxLayer>
        <ParallaxLayer>
          <img src="/sky.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer>
          <img src="/background.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer>
          <img src="/water2.gif" alt="" />
        </ParallaxLayer>

        <ParallaxLayer>
          <img src="/foreground.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
}
