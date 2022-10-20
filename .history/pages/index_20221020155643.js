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
            height={300}
            width={300}
            alt="Photo of me, Cassie Fleming"
          />
        </div>
        <div className={`${styles.photo} ${styles.photoBottom}`}>
          <Image
            className={styles.photo}
            src="/fox.png"
            height={1080}
            width={1920}
            alt="glowing fox"
          />
        </div>
      </div>

      <p className={styles.aboutText}>
        Hi!
        <br />
        <br />
        My name is Cassie Fleming. I&apos;m a 21-year-old junior animator and
        illustrator from Melbourne, Australia.
        <br />
        <br /> Specializing in 2D animation with skills in Toon Boom Harmony,
        and book illustrating. Through a strong commitment to teamwork, learning
        new skills, and pure joy for the work, I aim to develop memorable and
        inspiring stories with entertaining visuals. I am currently about to
        complete a Bachelor of Animation at the Swinburne University of
        Technology.{" "}
      </p>
      <div className={styles.photoContainer}>
        <div className={`${styles.photo}`}>
          <Image
            className={styles.photo}
            src="/cherry blossom.2.jpg"
            height={725}
            width={1200}
            alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
          />
        </div>

        <div className={`${styles.photo} ${styles.photoBottom}`}>
          <Image
            className={`${styles.photo}`}
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
