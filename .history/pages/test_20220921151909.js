import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer>
        <Image
          src="/background.png"
          height={2000}
          width={300}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
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
