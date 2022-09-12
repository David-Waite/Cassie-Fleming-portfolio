import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="photos">
        <Image
          src="/Cassie.png"
          height={400}
          width={400}
          alt="Photo of me, Cassie Fleming"
        />
        <Image
          src="/cherry blossom.2.jpg"
          height={725}
          width={1200}
          alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
        />
      </div>
      <div className="about-text">
        Hi! My name is Cassie Fleming, I am a aspiring animator and designer
        from Melbourne Australia. I am currently in my last year of a Bachelors
        of Animation at Swinburne University of Technology. I have been an
        artist all my life, with a wide range in skills such as pencil,
        charcoal, pastel and acrylic paint. In 2018 I started to teach myself
        digital art and animation. Now focusing on 2D animation, with skills in
        toon boom. I absolutely love what I do and put a lot of time, energy and
        love into always improving my skills and widening my experience in any
        way that I can. Experience Illustrator of a children&apos;s joke book
        called Laugh-A-Bull by Dan Stones. Published in March 2021 by Green Hill
        publishers. https://www.instagram.com/hank_thebull/ Listed illustrator
        for Green Hill publishing agency based in Port Adelaide, South
        Australia. My pieces are listed under Cherry Blossoms and Afterglow.
        https://australianillustrators.store/ Intern at MINA, Mobile Innovation
        Network association. 2022 https://mina.pro/
      </div>
      <div className="photos">
        <Image
          src="/fox.png"
          height={1080}
          width={1920}
          alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
        />
        <Image
          src="/cherry blossom.2.jpg"
          height={725}
          width={1200}
          alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
        />
      </div>
    </div>
  );
}
