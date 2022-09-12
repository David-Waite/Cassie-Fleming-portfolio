import Image from "next/image";
import { useEffect, useState } from "react";
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
  let personalWorksElementsv2 = [];

  for (let i = 0; i < personalWorks.length; i++) {
    let l;
    if (i + 1 !== personalWorks.length) {
      l = i + 1;
    }
    console.log(i);

    personalWorksElementsv2.push(
      <div className={styles.layout} key={i}>
        <div>
          <BookPreview
            key={personalWorks[i].sys.id}
            width={
              personalWorks[i].fields.image.fields.file.details.image.width
            }
            height={
              personalWorks[i].fields.image.fields.file.details.image.height
            }
            src={personalWorks[i].fields.image.fields.file.url}
            alt={personalWorks[i].fields.title}
            slug={`/personalWorks/${personalWorks[i].fields.slug}`}
          />
          {l ? (
            <BookPreview
              key={personalWorks[l].sys.id}
              width={
                personalWorks[l].fields.image.fields.file.details.image.width
              }
              height={
                personalWorks[l].fields.image.fields.file.details.image.height
              }
              src={personalWorks[l].fields.image.fields.file.url}
              alt={personalWorks[l].fields.title}
              slug={`/personalWorks/${personalWorks[l].fields.slug}`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
    i++;
  }

  const { height, width } = useWindowDimensions();
  console.log(height);
  console.log(width);
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.photo}
              src="/Cassie.png"
              height={3024}
              width={3024}
              alt="Photo of me, Cassie Fleming"
            />
          </div>
          <h2 className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magni quibusdam excepturi iure expedita ipsum alias voluptatem nam
            maxime tempore reprehenderit perferendis corporis, repellendus
            consequatur laborum labore dolores magnam dicta sunt impedit aliquam
            tenetur! Iure est nam, deleniti enim culpa harum unde deserunt
            voluptatum consectetur ad magni ducimus odit! Impedit.
          </h2>
        </div>
      </div>
      <div className={styles.layout}>{personalWorksElementsv2}</div>
    </div>
  );
}
