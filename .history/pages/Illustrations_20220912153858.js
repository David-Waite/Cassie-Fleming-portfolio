import Image from "next/image";
import styles from "../styles/Illustrations.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "illustrations" });

  return {
    props: {
      illustrations: res.items,
    },
  };
}

export default function Illustrations({ illustrations }) {
  const illustrationsElements = illustrations.map((illustrations) => {
    return (
      <BookPreview
        key={illustrations.sys.id}
        width={
          illustrations.fields.illustration.fields.file.details.image.width
        }
        height={
          illustrations.fields.illustration.fields.file.details.image.height
        }
        src={illustrations.fields.illustration.fields.file.url}
        alt={illustrations.fields.title}
        slug={illustrations.fields.slug}
      />
    );
  });

  return <div className={styles.layout}>{illustrationsElements}</div>;
}
