import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function OpeningParallax(props) {
  return (
    <div className="everything">
      <div className="container">
        <Parallax className="box" pages={1.525}>
          <ParallaxLayer speed={0}>
            <img src="/sky.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0}>
            <img src="/background.png" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0}>
            <img src="/water2.gif" alt="" />
          </ParallaxLayer>

          <ParallaxLayer speed={0}>
            <img src="/foreground2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <h1>Cassie Fleming</h1>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4}>
            <img src="foreground.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={-0.00001}></ParallaxLayer>
        </Parallax>
      </div>

      <style jxs>{`
      .container {
        width: 100% height: '100%', background: '#253237'}
      
       
        
      `}</style>
    </div>
  );
}
