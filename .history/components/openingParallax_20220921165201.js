import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function OpeningParallax() {
  return (
    <div className="everything">
      <div className="container">
        <Parallax pages={1.8}>
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
          <ParallaxLayer offset={0.5} speed={-0.7}>
            <h1>Cassie Fleming</h1>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2}>
            <img src="foreground.png" alt="" />
          </ParallaxLayer>
        </Parallax>
      </div>

      <style jxs>{`
      
        img {
          width: 100%;
          height: auto;
          object-fit: contain
        }
        .container {
          width: 100vw
          height: auto;
        }
        h2 {
          z-index: 1000;
        }
        h1 {
          color: black;
          font-weight: 400;
          font-size: 100px;
          text-align: center
        }
        .everything {
          height: 99vh
        }
        
      `}</style>
    </div>
  );
}
