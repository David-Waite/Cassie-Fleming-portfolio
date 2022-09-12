import Image from "next/image";
import styles from "../styles/Illustrations.module.css";

export default function Illustrations() {
  return (
    <div className={styles.layout}>
      <div className={styles.modal}>
        <div className={styles.modalImage}>
          <Image
            src="/cherry blossom.2.jpg"
            height={725}
            width={1200}
            alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
          />
        </div>
        <div className={styles.text}></div>
        <h2>title here</h2>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque enim
          inventore sequi tempore assumenda vel iste expedita dolores qui? Neque
          ipsa voluptate modi obcaecati impedit minus animi molestiae cumque
          aliquam quam dolor officia, enim ratione ex vel, dolores
          exercitationem temporibus dicta amet fuga tenetur repudiandae
          reiciendis quod voluptatibus. Deserunt officia illum sapiente impedit
          doloremque in, ipsum natus molestiae, iusto, id ipsam doloribus
          praesentium officiis sint dolorem harum! Consectetur, aspernatur
          numquam
        </p>
      </div>
      <div>
        <Image
          src="/cherry blossom.2.jpg"
          height={725}
          width={1200}
          alt="Cherry Blossom covered fox, taking a nap in a hollowed tree log, by the river"
        />
        <Image
          src="/flamabull_bookpage.png"
          height={568}
          width={1491}
          alt="girl with cool hair a swaggie eyes"
        />
      </div>
      <div>
        <Image src="/fox.png" height={1080} width={1920} alt="glowing fox" />
      </div>
      <div>
        <Image
          src="/Inkedhuman.jpg"
          height={930}
          width={1211}
          alt="girl with cool hair a swaggie eyes"
        />
      </div>
      <div></div>
    </div>
  );
}
