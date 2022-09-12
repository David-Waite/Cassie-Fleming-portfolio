import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "../styles/Illustration.module.css";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "illustrations",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "illustrations",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { illustrations: items[0] },
  };
};

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

  return (
    <div className={styles.layout}>
      <Image src={`https:${url}`} height={height} width={width} alt="yeet" />
      <div>
        {documentToReactComponents(
          illustrations[0].fields.description,
          renderOptions
        )}
      </div>
      <style jsx>{`
        p {
          padding: 20px;
        }
        #text {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
