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
    console.log(illustrations.fields.illustration.fields.file.details);
    return <BookPreview key={illustrations.sys.id} />;
  });

  return <div className={styles.layout}>{illustrationsElements}</div>;
}
