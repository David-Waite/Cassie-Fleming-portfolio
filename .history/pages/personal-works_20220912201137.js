import Image from "next/image";
import styles from "../styles/personal-works.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

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
  const animationsElements = animations.map((animation) => {
    return (
      <BookPreview
        key={personalWorks.sys.id}
        width={personalWorks.fields.image.fields.file.details.image.width}
        height={personalWorks.fields.image.fields.file.details.image.height}
        src={personalWorks.fields.image.fields.file.url}
        alt={personalWorks.fields.title}
        slug={`/personalworks/${personalWorks.fields.slug}`}
      />
    );
  });

  return (
    <div>
      <div className={styles.layout}>{personalWorksElementsv2}</div>
    </div>
  );
}
