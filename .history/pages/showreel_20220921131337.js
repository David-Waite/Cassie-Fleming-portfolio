import Link from "next/link";
import { ArrowLeft } from "react-bootstrap-icons";
export default function YoutubeEmbed() {
  return (
    <div>
      <div className={styles.backLink}>
        <Link href="/animations">
          <a>
            <ArrowLeft />
          </a>
        </Link>
      </div>
      <h2 className={styles.title}>{animations.fields.title}</h2>
      <iframe
        src="https://www.youtube.com/embed/WnbKlWLS2ug"
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
