import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function OpeningParallax(props) {
  return (
    <div className="everything">
      <div className="container"></div>

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
        .textstuff {
          background-color: green;
          margin: 0;
          height: 90vh;
        }
        h2 {
          z-index: 1000;
        }
        h1 {
          padding: 0;
          margin: 0;
          color: black;
          text-align: center
        }
        .everything {
          height: 100vh;
          
        }
        /*
        .box::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .box {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        */
      `}</style>
    </div>
  );
}
