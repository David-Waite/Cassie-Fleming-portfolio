import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "../styles/Illustration.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "illustrations" });

  return {
    props: {
      illustrations: res.items,
    },
  };
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div className={styles.photos}>
          <Image
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        </div>
      );
    },
  },
};

export default function illustration({ illustrations }) {
  const url = illustrations[0].fields.illustration.fields.file.url;
  const width =
    illustrations[0].fields.illustration.fields.file.details.image.width;
  const height =
    illustrations[0].fields.illustration.fields.file.details.image.height;
  console.log(illustrations[0].fields.description);
  return (
    <div className={styles.layout}>
      <Image src={`https:${url}`} height={height} width={width} alt="yeet" />
      <div>
        {documentToReactComponents(
          illustrations[0].fields.description,
          renderOptions
        )}
      </div>
    </div>
  );
}
