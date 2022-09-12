import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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

export default function illustration({ illustrations }) {
  console.log(illustrations[0].fields.illustration.fields.file.url);
  console.log(
    illustrations[0].fields.illustration.fields.file.details.image.width
  );

  <div>
    <h1>{illustrations[0].fields.title}</h1>
  </div>;
}
