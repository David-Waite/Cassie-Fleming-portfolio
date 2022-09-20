import Image from "next/image";
import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import displayThumbnail from "../functions/displayThumbnail";
import React from "react";

import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/header"), {
  ssr: false,
});
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
  const [width, setWidth] = React.useState(getWindowWidth());
  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const personalWorksElements = displayThumbnail(personalWorks, width);

  return (
    <div>
      <div className={styles.layout}>{personalWorksElements}</div>
    </div>
  );
}
