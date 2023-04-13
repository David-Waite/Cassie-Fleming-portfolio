import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import DisplayThumbnail from "../components/DisplayThumbnail";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>Cassie Fleming | Illustrations</title>
      </Head>
      <div className={styles.layout}>
        <DisplayThumbnail
          thumbnailArray={illustrations}
          slugName="illustrations"
        />
      </div>
    </>
  );
}
