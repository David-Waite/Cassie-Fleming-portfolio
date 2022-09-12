import Image from "next/image";
import styles from "../styles/Illustrations.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "animation" });

  return {
    props: {
      illustrations: res.items,
    },
  };
}

export default function Illustrations({ animation }) {
  const illustrationsElements = animation.map((animation) => {
    return (
      <BookPreview
        key={animation.sys.id}
        width={animation.fields.thumbnail.fields.file.details.image.width}
        height={animation.fields.thumbnail.fields.file.details.image.height}
        src={animation.fields.thumbnail.fields.file.url}
        alt={animation.fields.title}
        slug={animation.fields.slug}
      />
    );
  });

  return <div className={styles.layout}>{illustrationsElements}</div>;
}
