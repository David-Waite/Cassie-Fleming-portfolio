import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import DisplayThumbnail from "../components/DisplayThumbnail";
import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "personalWorks" });

  return {
    props: {
      personalWorks: res.items,
    },
  };
}

export default function PersonalWorks({ personalWorks }) {
  return (
    <div>
      <Head>
        <title>Cassie Fleming | Personal Works</title>
      </Head>
      <div className={styles.layout}>
        <DisplayThumbnail thumbnailArray={personalWorks} />
      </div>
    </div>
  );
}
