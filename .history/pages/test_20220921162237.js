import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={2}>
        <ParallaxLayer speed={0.1}>
          <img src="/sky.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          <img src="/background.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.4}>
          <img src="/water2.gif" alt="" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.2}>
          <img src="/foreground2.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2}>
          <img src="foreground.png" alt="" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          <h1>Cassie Fleming</h1>
        </ParallaxLayer>
      </Parallax>
      <style jxs>{`
        body {
          background-color: #f5f9f7;
        }
        img {
          width: 100%;
          height: auto;
          object-fit: contain
        }
        .container {
          width: 100vw
        }
        h1 {
          color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
