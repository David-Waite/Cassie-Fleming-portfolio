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
  const illustrationsElements = illustrations.map(
    illustrations[0].map((illustration) => (
      <BookPreview
        key={illustration.fields.illustration.sys.id}
        url={illustration.fields.illustration.fields.file.url}
        width={illustration.fields.illustration.fields.file.details.image.width}
        height={
          illustration.fields.illustration.fields.file.details.image.height
        }
      />
    ))
  );

  return <div className={styles.layout}></div>;
}
