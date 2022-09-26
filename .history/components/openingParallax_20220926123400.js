import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

export default function OpeningParallax(props) {
  return (
    <div className="everything">
      <div className="container">
        <Parallax className="box" pages={2}>
          <ParallaxLayer speed={0.1}>
            <img src="/sky.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0.1}>
            <img src="/background.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0.1} offset={0.55}>
            <img className="water" src="/water.gif" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0.4}>
            <img src="/foreground2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Cassie Fleming</h1>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4}>
            <div className="photo">
              <Image
                src="/foreground.png"
                width={1920}
                height={1700}
                alt="io"
              ></Image>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>

      <style jxs>{`
      .container {
        width: 100%;
        height: 100%;
        background: #253237;
      }
      .photo{
        width: 3000px;
      }
      img {
        width: 100%;
       border: 1px solid black;
        height: 150vh;
        
      }
      .water {
        height: auto;
        width: 100vw;
      }
      
      `}</style>
    </div>
  );
}
