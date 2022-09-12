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
  const personalWorksElementsv2 = personalWorks.map((personalWork) => {
    return (
      <BookPreview
        key={personalWork.sys.id}
        width={personalWork.fields.image.fields.file.details.image.width}
        height={personalWork.fields.image.fields.file.details.image.height}
        src={personalWork.fields.image.fields.file.url}
        alt={personalWork.fields.title}
        slug={`/personalworks/${personalWork.fields.slug}`}
      />
    );
  });

  return (
    <div>
      <div className={styles.layout}>{personalWorksElementsv2}</div>
    </div>
  );
}
