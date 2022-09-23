import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={1}></ParallaxLayer>
      <ParallaxLayer></ParallaxLayer>
      <ParallaxLayer></ParallaxLayer>
      <ParallaxLayer>
        <Image src="/sky.png" height={2000} width={1920} alt="sky" />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image src="/water2.png" height={2000} width={1920} alt="water" />
      </ParallaxLayer>
    </Parallax>
  );
}
