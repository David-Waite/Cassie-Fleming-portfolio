import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import DisplayThumbnail from "../components/DisplayThumbnail";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "animation" });

  return {
    props: {
      animations: res.items,
    },
  };
}

export default function Animations({ animations }) {
  console.log(animations);
  return (
    <>
      <Head>
        <title>Cassie Fleming | Animations</title>
      </Head>
      <div className={styles.layout}>
        <DisplayThumbnail thumbnailArray={animations} slugName="animations" />
      </div>
    </>
  );
}
