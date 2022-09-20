import Image from "next/image";
import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";
import displayThumbnail from "../functions/displayThumbnail";
import { useState, useCallback, useEffect } from "react";

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
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  let width = screen.width;
  const personalWorksElements = displayThumbnail(personalWorks, width);

  return (
    <div>
      <div className={styles.layout}>{personalWorksElements}</div>
    </div>
  );
}
