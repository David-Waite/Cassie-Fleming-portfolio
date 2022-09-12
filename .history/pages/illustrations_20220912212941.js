import styles from "../styles/Illustrations.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

export async function getStaticProps() {
  const client = createClient({
    space: "agrr167dqftk",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "illustrations" });

  return {
    props: {
      illustrations: res.items,
      revalidate: 300,
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
        slug={`/illustrations/${illustrations.fields.slug}`}
      />
    );
  });

  return <div className={styles.layout}>{illustrationsElements}</div>;
}
