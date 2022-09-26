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
        <div className={styles.photo}></div>
      </div>

      <p className={styles.aboutText}>
        Hi!
        <br />
        <br />
        My name is Cassie Fleming. I&apos;m a junior animator and illustrator
        from Melbourne, Australia. Currently in my last year of a Bachelor of
        Animation at Swinburne University of Technology.
        <br />
        <br /> I have been an artist all my life, with a wide range of skills
        such as pencil, charcoal, pastel, and acrylic paint. In 2018 I started
        to teach myself digital art and animation. Now in 2022, I have a love
        for 2D animation, with skills in toon boom harmony.
      </p>
      <div className={styles.photoContainer}></div>
      <style jxs>{`
      .duck {
        border: 1px solid black;
      }`}</style>
    </div>
  );
}
