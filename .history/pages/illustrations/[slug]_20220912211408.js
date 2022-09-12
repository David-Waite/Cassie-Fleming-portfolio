import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import styles from "../../styles/Illustration.module.css";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

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

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
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
