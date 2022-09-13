import Image from "next/image";
import styles from "../styles/worksSelection.module.css";
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
      revalidate: 300,
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
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
    i++;
  }

  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.modal}>
         
            <img
              className={styles.photo}
              src="/Cassie.png"
              height={3024}
              width={3024}
              alt="Photo of me, Cassie Fleming"
            />
          </div>
          <p styles={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorem dignissimos tempore quas molestiae eum voluptates, illo
            reprehenderit reiciendis asperiores similique pariatur voluptatum
            odit sapiente magnam, praesentium delectus repudiandae labore
            obcaecati voluptatibus quidem necessitatibus eveniet? Minima veniam
            id quaerat. Facilis perspiciatis porro veritatis corrupti incidunt,
            mollitia repudiandae vero dicta fugit!
          </p>
        </div>
        {personalWorksElementsv2}
      </div>
    </div>
  );
}
