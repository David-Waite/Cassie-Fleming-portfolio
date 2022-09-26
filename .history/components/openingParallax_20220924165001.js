import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function OpeningParallax(props) {
  return (
    <div className="everything">
      <div className="container">
        <Parallax className="box" pages={1.525}>
          <ParallaxLayer>
            <img src="/sky.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer>
            <img src="/background.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer>
            <img src="/water2.gif" alt="" />
          </ParallaxLayer>

          <ParallaxLayer>
            <img src="/foreground2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer>
            <h1>Cassie Fleming</h1>
          </ParallaxLayer>
          <ParallaxLayer>
            <img src="foreground.png" alt="" />
          </ParallaxLayer>
        </Parallax>
      </div>

      <style jxs>{`
      .container {
        width: 100% height: '100%', background: '#253237'}
      
       
        
      `}</style>
    </div>
  );
}
