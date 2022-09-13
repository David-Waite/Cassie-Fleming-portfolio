import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "../../styles/Illustration.module.css";
import Link from "next/link";

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
    revalidate: 300,
  };
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div className={styles.photos}>
          <img
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
  const url = illustrations.fields.illustration.fields.file.url;
  const width =
    illustrations.fields.illustration.fields.file.details.image.width;
  const height =
    illustrations.fields.illustration.fields.file.details.image.height;

  return (
    <div className={styles.layout}>
      <div>
        <Link href="/illustrations">
          <a>Back</a>
        </Link>
      </div>
      <Image src={`https:${url}`} height={height} width={width} alt="yeet" />
      <div>
        {documentToReactComponents(
          illustrations.fields.description,
          renderOptions
        )}
      </div>
    </div>
  );
}
