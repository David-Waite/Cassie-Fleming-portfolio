import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer>
        <Image
          src="/background.png"
          height={2000}
          width={1920}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src="/background2.png"
          height={2000}
          width={1920}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src="/background.png"
          height={2000}
          width={1920}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src="/background.png"
          height={2000}
          width={1920}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
    </Parallax>
  );
}
