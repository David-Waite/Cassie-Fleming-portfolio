import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
          <img src="/sky.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer>
          <img src="/background.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer>
          <img src="/water2.gif" alt="" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <img src="/foreground2.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
          <img src="foreground.png" alt="" />
        </ParallaxLayer>
      </Parallax>
      <style jxs>{`
        body {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}
