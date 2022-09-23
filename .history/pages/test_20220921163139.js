import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
export default function Test() {
  return (
    <div className="everything">
      <div className="container">
        <Parallax pages={2}>
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
      <div className="text">
        <h2>hellpo</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          perferendis, porro, amet architecto voluptates vitae temporibus sit
          ipsam iusto libero numquam? Impedit cupiditate voluptatum blanditiis
          pariatur aut provident non sit beatae sapiente minus commodi
          laboriosam exercitationem maiores, quas magni dolor eaque dolorem
          quia? Inventore quasi quas sapiente a impedit iusto illum, laudantium,
          aut deserunt reiciendis ipsam illo atque, nulla tenetur. Quasi
          eligendi cum numquam voluptate ipsa excepturi voluptatum eum deleniti
          soluta molestias perspiciatis, veniam minus, dolorum nam rerum totam
          laboriosam in alias doloremque fugit deserunt impedit tempore! Omnis
          delectus illum, repudiandae architecto impedit corporis quos facere
          voluptas necessitatibus quod ducimus quisquam enim quae aliquid
          assumenda aperiam dicta, voluptatem soluta amet labore, animi optio.
          Animi doloribus voluptatibus rem totam harum deserunt eos, atque
          quidem! Sit aperiam veritatis corrupti ratione. Fugit, dolorem,
          commodi odit nostrum error beatae velit reprehenderit deserunt natus
          ullam nobis alias quia veniam autem magni qui laudantium vel
          repellendus sapiente, quidem sunt neque sed cumque. Iusto eum, sed
          temporibus non beatae dolore tempora deserunt quam nam ex iste
          provident nihil, ab esse modi in, numquam sapiente quaerat? Tempore
          molestiae, dicta error eaque eius consequuntur assumenda? Libero,
          corporis nobis ullam ab facilis adipisci possimus culpa asperiores
          ratione eligendi, perferendis in. Id nobis doloremque maiores aliquam
          ab illum amet esse non cupiditate maxime nostrum, sit a! Neque,
          dolore. Molestiae nostrum facilis aperiam quibusdam maiores neque
          blanditiis commodi quisquam hic temporibus fuga, ullam praesentium
          pariatur expedita debitis facere, ipsa consequuntur iusto consectetur
          quo. Aliquid at temporibus quo necessitatibus laborum natus iste hic,
          explicabo quod impedit error sit vitae eaque tenetur porro mollitia
          sequi odio saepe velit. Odit aspernatur, nobis quia commodi ipsam amet
          explicabo. Facere, dolore libero excepturi laboriosam veniam quia
          inventore ipsa cumque illo et dignissimos, unde quis. Minus officiis
          pariatur consectetur aliquam placeat reprehenderit veniam quas vitae
          nemo error? Ab obcaecati voluptatum culpa. Esse magni nam illum
          laboriosam alias, reprehenderit facilis, illo unde optio eligendi
          necessitatibus eum beatae inventore tenetur minus. Hic consequatur
          nemo ipsam itaque, similique enim quam velit saepe id earum tempora
          suscipit voluptatum maxime molestias repellendus, sequi aspernatur
          nisi ullam! Tempora iste est amet. Quod minima, exercitationem
          excepturi atque vero ea. Numquam, quasi? Commodi earum, blanditiis
          iusto dolorum ut aspernatur consequuntur non voluptate perferendis
          architecto? Itaque asperiores rem quos! Impedit sit nam eveniet et
          deserunt possimus iure non. Eum deserunt, blanditiis dolorum tenetur
          quae inventore assumenda incidunt eos dolores aliquam, quaerat culpa
          sit maxime facilis amet ut reprehenderit porro molestiae pariatur
          facere nihil, illum eius ipsa libero? Illo vero officia quod, possimus
          quos nam molestiae sit et tempore qui. In maiores saepe autem
          reprehenderit fugiat dicta, nam non, molestias pariatur quasi iusto
          enim sequi nemo odit laborum. Laboriosam nostrum saepe fugit minus,
          excepturi quam eligendi. Ex ea repellendus maxime expedita sequi illo
          ipsa! Quod sapiente quae expedita porro voluptatum nisi quibusdam
          impedit, assumenda hic! Assumenda fuga minus, voluptate dolores ex
          aspernatur et ut facilis facere ratione quas quia corrupti!
          Temporibus, neque ex. Ratione a vero harum natus! Vitae, tempora natus
          illo dolorem quos voluptas labore totam aliquid!
        </p>
      </div>

      <style jxs>{`
        body {
          background-color: #f5f9f7;
        }
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
          color: white;
          font-weight: 400;
          font-size: 100px;
          text-align: center
        }
        .text{
          postion: absolute;
          top: 202vh;
          
        }
      `}</style>
    </div>
  );
}
