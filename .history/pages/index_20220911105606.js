import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <div className="photos">
        <Image
          src="/Cassie.png"
          height={3024}
          width={3024}
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
        Network association. 2022 https://mina.pro/ Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. At quis nihil consectetur eos aspernatur,
        quaerat aliquam reiciendis laborum officiis, debitis maiores sit fugit!
        Facere repellat incidunt expedita voluptatem accusantium libero odit
        quia dolorem eaque itaque optio distinctio quas adipisci, soluta maxime
        quos, et dolores. Porro consequatur laudantium sit quisquam quidem cum
        ipsam. Quis doloribus aspernatur omnis architecto, saepe quia voluptatem
        minima eum odio iure sequi qui accusamus obcaecati aliquid facilis
        numquam provident nisi excepturi illo itaque? Impedit dolorum, deleniti
        rem magnam molestias labore dolore eum sunt, in itaque nihil. At, totam
        cumque reprehenderit minima modi ab repudiandae in dicta obcaecati quam
        amet aut incidunt ex nisi perferendis suscipit ipsam, impedit
        voluptatibus, soluta accusantium ullam laboriosam. Ea aspernatur
        assumenda reprehenderit accusamus dolore quisquam asperiores facilis
        aperiam ipsum fugiat. Facere, iste. Alias accusantium quo doloribus
        incidunt atque animi quibusdam exercitationem! Ab totam non, quibusdam
        impedit omnis neque repellendus adipisci, quidem, consequatur eaque ipsa
        eligendi? Vel illo nihil doloribus in minus distinctio, pariatur commodi
        dolorum maxime explicabo reprehenderit nam reiciendis maiores architecto
        aperiam, qui illum vitae dolore sed, molestiae ipsum ad mollitia hic?
        Soluta molestias, deserunt exercitationem temporibus dolorem neque
        ratione amet similique commodi quas iure? Voluptate ullam blanditiis
        architecto, ex quaerat libero corrupti facere doloribus error eius,
        pariatur minima veniam accusamus? Ea officia incidunt accusantium,
        labore nulla nobis, obcaecati facilis excepturi natus fuga nisi quam
        aliquam maiores libero. Adipisci natus cupiditate quia obcaecati omnis
        recusandae nemo labore vitae iure minima accusantium impedit eius, amet
        blanditiis voluptatum iste nostrum totam quasi, ex dolor consectetur
        debitis? Earum praesentium laborum laboriosam aspernatur fugit
        laudantium sint excepturi assumenda quia rem modi quos quae in dicta
        labore voluptas aperiam perspiciatis, amet fugiat et recusandae sed?
        Rerum, aut mollitia. In neque consequuntur officia. Cupiditate nam non
        omnis facilis enim? Voluptatibus consectetur quas eligendi quam nemo aut
        laudantium, molestias veniam odio dicta ipsam aliquid illum quod neque
        explicabo! Modi animi eaque dignissimos eum voluptatum, doloremque vero
        illum sed id sit sunt, blanditiis distinctio nisi dolores soluta
        accusantium voluptatem necessitatibus quasi et. Debitis tempore,
        expedita eaque minus inventore omnis consectetur voluptatibus soluta est
        id fugiat tenetur veniam assumenda adipisci mollitia, iste officia. Id
        sunt fugiat cupiditate ipsam perspiciatis iure perferendis ullam
        asperiores dignissimos aperiam, voluptas qui soluta quam aut labore!
        Aliquid debitis quas pariatur ex? Quia repellendus explicabo ea velit
        pariatur hic quod voluptas. Quas amet molestias vel sunt quae reiciendis
        est. Cupiditate error nihil hic earum maiores nisi accusamus!
      </div>
      <div className="photos">
        <Image src="/fox.png" height={1080} width={1920} alt="glowing fox" />
        <Image
          src="/Inkedhuman.jpg"
          height={930}
          width={1211}
          alt="girl with cool hair a swaggie eyes"
        />
      </div>
    </div>
  );
}
