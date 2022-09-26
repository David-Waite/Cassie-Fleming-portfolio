import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function OpeningParallax(props) {
  return (
    <div className="everything">
      <div className="container">
        <Parallax className="box" pages={2}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          >
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit repellat ea esse labore temporibus quis, sequi
              architecto iusto accusamus neque.
            </h2>
          </ParallaxLayer>

          <ParallaxLayer
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/sky.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/background.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer
            speed={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/water2.gif" alt="" />
          </ParallaxLayer>

          <ParallaxLayer
            speed={0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
            <img src="foreground.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit repellat ea esse labore temporibus quis, sequi
                architecto iusto accusamus neque.
              </h2>
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
      img {
        min-width: 100vw;
        min-height: 120vh;

 
   
      ;}
      
      `}</style>
    </div>
  );
}
