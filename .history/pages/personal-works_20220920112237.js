import Image from "next/image";
import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import displayThumbnail from "../functions/displayThumbnail";

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
  const personalWorksElements = displayThumbnail(personalWorks, styles.layout);
  console.log(personalWorksElements);
  return (
    <div>
      <div className={styles.layout}>{personalWorksElements}</div>
    </div>
  );
}
