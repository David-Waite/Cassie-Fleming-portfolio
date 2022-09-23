import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer></ParallaxLayer>
      <ParallaxLayer>
        <h2>hi</h2>
      </ParallaxLayer>
      <ParallaxLayer>
        <h2>hi</h2>
      </ParallaxLayer>
      <ParallaxLayer>
        <h2>hi</h2>
      </ParallaxLayer>
    </Parallax>
  );
}
