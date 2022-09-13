import Image from "next/image";
import styles from "../styles/Illustrations.module.css";
import { createClient } from "contentful";

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
  const url = illustrations[0].fields.illustration.fields.file.url;
  const width =
    illustrations[0].fields.illustration.fields.file.details.image.width;
  const height =
    illustrations[0].fields.illustration.fields.file.details.image.height;

  return <div className={styles.layout}></div>;
}