import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={1}>
        <Image
          src="/background.png"
          height={2000}
          width={1920}
          alt="Photo of me, Cassie Fleming"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src="/foreground.png"
          height={2000}
          width={1920}
          alt="forground"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src="\foreground.png"
          height={2000}
          width={1920}
          alt="forground2"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image src="/sky.png" height={2000} width={1920} alt="sky" />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image src="/water2.gif" height={2000} width={1920} alt="water" />
      </ParallaxLayer>
    </Parallax>
  );
}
