import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "../../styles/animation.module.css";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "animation",
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
    content_type: "animation",
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
    props: { animations: items[0] },
    revalidate: 300,
  };
};

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

export default function animation({ animations }) {
  let video;
  if (animations.fields.url) {
    video = (
      <div className={styles.videoResponsive}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/watch?v=L3fuZvIb1r8`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  } else {
    const src = `https:${animations.fields.gif.fields.file.url}`;
    const width = animations.fields.gif.fields.file.details.image.width;
    const height = animations.fields.gif.fields.file.details.image.height;
    const title = animations.fields.title;
    video = <Image src={src} height={height} width={width} alt={title} />;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.image}>{video}</div>

      <div>
        {documentToReactComponents(
          animations.fields.description,
          renderOptions
        )}
      </div>
    </div>
  );
}
