import styles from "../styles/worksSelection.module.css";
import { createClient } from "contentful";
import BookPreview from "../components/BookPreview";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "animation" });

  return {
    props: {
      animations: res.items,
    },
  };
}

export default function Animations({ animations }) {
  let animationsElements = [];

  for (let i = 0; i < animations.length; i++) {
    let l;
    if (i + 1 !== animations.length) {
      l = i + 1;
    }

    animationsElements.push(
      <div className={styles.layout} key={i}>
        <div>
          <BookPreview
            key={animations[i].sys.id}
            width={
              animations[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              animations[i].fields.thumbnail.fields.file.details.image.height
            }
            src={animations[i].fields.thumbnail.fields.file.url}
            alt={animations[i].fields.title}
            slug={`/animations/${animations[i].fields.slug}`}
          />
          {l ? (
            <BookPreview
              key={animations[l].sys.id}
              width={
                animations[l].fields.thumbnail.fields.file.details.image.width
              }
              height={
                animations[l].fields.thumbnail.fields.file.details.image.height
              }
              src={animations[l].fields.thumbnail.fields.file.url}
              alt={animations[l].fields.title}
              slug={`/animations/${animations[l].fields.slug}`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
    i++;
  }

  return <div className={styles.layout}>{animationsElements}</div>;
}
