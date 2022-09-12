import Image from "next/image";
import styles from "../styles/Illustrations.module.css";

export default function Illustrations() {
  return (
    <div className={styles.layout}>
      <div className={styles.chanse}>
        <div className="">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
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
