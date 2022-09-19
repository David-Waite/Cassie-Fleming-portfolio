import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

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
  const characterDesignsElements = characterDesigns.map((characterDesign) => {
    return (
      <BookPreview
        key={characterDesign.sys.id}
        width={characterDesign.fields.thumbnail.fields.file.details.image.width}
        height={
          characterDesign.fields.thumbnail.fields.file.details.image.height
        }
        src={characterDesign.fields.thumbnail.fields.file.url}
        alt={characterDesign.fields.title}
        slug={`/characterDesigns/${characterDesign.fields.slug}`}
      />
    );
  });

  return <div className={styles.layout}>{characterDesignsElements}</div>;
}
