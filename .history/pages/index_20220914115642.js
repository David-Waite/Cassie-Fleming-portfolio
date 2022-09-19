import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <div className={`${styles.photoContainer} ${styles.photoContainerLeft}`}>
        <div>
          <Image
            className={styles.photo}
            src="/Cassie.png"
            height={3024}
            width={3024}
            alt="Photo of me, Cassie Fleming"
          />
        </div>
        <div className={styles.photo}>
          <Image
            className={styles.photo}
            src="/cherry blossom.2.jpg"
            height={725}
            width={1200}
            alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
          />
        </div>
      </div>

      <div className={styles.aboutText}>
        Hi!
        <br />
        <br />
        My name is Cassie Fleming, Im a junior animator and illustrator from
        Melbourne Australia. Currently in my last year of a Bachelors of
        Animation at Swinburne University of Technology.
        <br />
        <br /> I have been an artist all my life, with a wide range in skills
        such as pencil, charcoal, pastel and acrylic paint. In 2018 I started to
        teach myself digital art and animation. Now in 2022 I have a love for 2D
        animation, with skills in toon boom harmony. yeet
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.photo}>
          <Image
            className={styles.photo}
            src="/fox.png"
            height={1080}
            width={1920}
            alt="glowing fox"
          />
        </div>
        <div className={styles.photo}>
          <Image
            className={styles.photo}
            src="/Inkedhuman.jpg"
            height={930}
            width={1211}
            alt="girl with cool hair a swaggie eyes"
          />
        </div>
      </div>
    </div>
  );
}