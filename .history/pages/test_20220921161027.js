import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="container">
      <Parallax pages={3}>
        <ParallaxLayer>
          <h1>cassie</h1>
        </ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={-0.3}></ParallaxLayer>

        <ParallaxLayer></ParallaxLayer>

        <ParallaxLayer></ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa
        sit repudiandae veritatis ea, quaerat error aliquid iusto laudantium
        natus cumque dignissimos expedita. Eius impedit corporis itaque vitae
        iure in veniam massime illum, provident magni soluta eos doloribus?
        Beatae voluptate libero ex facilis. Consectetur debitis porro reiciendis
        assumenda nesciunt a.
      </h2>
      <style jsx>{`
        .container {
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
