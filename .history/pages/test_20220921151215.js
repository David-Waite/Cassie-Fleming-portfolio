import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Test() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer>
        <h1>hello</h1>
      </ParallaxLayer>
      <ParallaxLayer></ParallaxLayer>
    </Parallax>
  );
}
