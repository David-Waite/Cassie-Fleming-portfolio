import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={2}>
        <ParallaxLayer>
          <Image
            src="/foreground2.png"
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
      </Parallax>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa
        sit repudiandae veritatis ea, quaerat error aliquid iusto laudantium
        natus cumque dignissimos expedita. Eius impedit corporis itaque vitae
        iure in veniam maxime illum, provident magni soluta eos doloribus?
        Beatae voluptate libero ex facilis. Consectetur debitis porro reiciendis
        assumenda nesciunt a.
      </h2>
    </div>
  );
}
