import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import DisplayThumbnail from "../components/DisplayThumbnail";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "characterDesign" });

  return {
    props: {
      characterDesigns: res.items,
    },
  };
}

export default function CharacterDesigns({ characterDesigns }) {
  return (
    <div className={styles.layout}>
      <DisplayThumbnail
        thumbnailArray={characterDesigns}
        slugName="characterDesigns"
      />
    </div>
  );
}
