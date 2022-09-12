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
  let personalWorksElementsv2 = "";
  for (let i = 0; i < personalWorks.length; i++) {
    console.log(i);
    personalWorksElementsv2 += () => <h1>hi</h1>;
    i++;
  }
  console.log(personalWorksElementsv2);
  const personalWorksElements = personalWorks.map((personalWork) => {
    return (
      <BookPreview
        key={personalWork.sys.id}
        width={personalWork.fields.image.fields.file.details.image.width}
        height={personalWork.fields.image.fields.file.details.image.height}
        src={personalWork.fields.image.fields.file.url}
        alt={personalWork.fields.title}
        slug={`/personalWorks/${personalWork.fields.slug}`}
      />
    );
  });

  return <div className={styles.layout}>{personalWorksElements}</div>;
}
