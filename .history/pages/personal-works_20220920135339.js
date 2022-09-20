import Image from "next/image";
import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import displayThumbnail from "../functions/displayThumbnail";
import React from "react";

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
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });
  }, []);
  let width = 200;
  const personalWorksElements = displayThumbnail(personalWorks, width);

  return (
    <div>
      <div className={styles.layout}>{personalWorksElements}</div>
    </div>
  );
}
