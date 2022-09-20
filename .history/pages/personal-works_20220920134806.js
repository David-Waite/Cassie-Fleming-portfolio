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
  const [windowWidth, setWindowWidth] = React.useState(screen.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  const personalWorksElements = displayThumbnail(personalWorks, windowWidth);

  return (
    <div>
      <div className={styles.layout}>{personalWorksElements}</div>
    </div>
  );
}
