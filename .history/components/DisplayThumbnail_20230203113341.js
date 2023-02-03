import BookPreview from "./BookPreview";
import React from "react";

export default function DisplayThumbnail(props) {
  console.log(props);
  const { thumbnailArray, slugName } = props;
  const [width, setWidth] = React.useState(999);
  React.useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth), 1;
    });
  });
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  const length = thumbnailArray.length;

  let thumbnailArrayFirstElement = [];
  let thumbnailArraySecondElement = [];
  let thumbnailArrayThirdElement = [];
  if (width > 1000) {
    const remainder = length % 3;
    if (remainder === 1) {
      const amountPerCol = Math.floor(length / 3);
      for (let i = 0; i < amountPerCol + 1; i++) {
        thumbnailArrayFirstElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.details.image.width
                : thumbnailArray[i].fields.thumbnail.fields.file.details.image
                    .width
            }
            height={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.details.image.height
                : thumbnailArray[i].fields.thumbnail.fields.file.details.image
                    .height
            }
            src={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.url
                : thumbnailArray[i].fields.thumbnail.fields.file.url
            }
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol + 1; i < amountPerCol * 2 + 1; i++) {
        thumbnailArraySecondElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.url
                : thumbnailArray[i].fields.thumbnail.fields.file.url
            }
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol * 2 + 1; i < amountPerCol * 3 + 1; i++) {
        thumbnailArrayThirdElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.details.image.width
                : thumbnailArray[i].fields.thumbnail.fields.file.details.image
                    .width
            }
            height={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.details.image.height
                : thumbnailArray[i].fields.thumbnail.fields.file.details.image
                    .height
            }
            src={
              thumbnailArray[i].fields.gif
                ? thumbnailArray[i].fields.gif.fields.file.url
                : thumbnailArray[i].fields.thumbnail.fields.file.url
            }
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }

      return (
        <>
          <div>{thumbnailArrayFirstElement}</div>
          <div>{thumbnailArraySecondElement}</div>
          <div> {thumbnailArrayThirdElement}</div>
        </>
      );
    } else if (remainder === 2) {
      const amountPerCol = Math.ceil(length / 3);
      for (let i = 0; i < amountPerCol; i++) {
        thumbnailArrayFirstElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol; i < amountPerCol * 2; i++) {
        thumbnailArraySecondElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol * 2; i < amountPerCol * 3 - 1; i++) {
        thumbnailArrayThirdElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }

      return (
        <>
          <div>{thumbnailArrayFirstElement}</div>
          <div>{thumbnailArraySecondElement}</div>
          <div> {thumbnailArrayThirdElement}</div>
        </>
      );
    } else if (remainder === 0) {
      const amountPerCol = Math.floor(length / 3);
      for (let i = 0; i < amountPerCol; i++) {
        thumbnailArrayFirstElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol; i < amountPerCol * 2; i++) {
        thumbnailArraySecondElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol * 2; i < amountPerCol * 3; i++) {
        thumbnailArrayThirdElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }

      return (
        <>
          <div>{thumbnailArrayFirstElement}</div>
          <div>{thumbnailArraySecondElement}</div>
          <div> {thumbnailArrayThirdElement}</div>
        </>
      );
    }
  } else {
    const remainder = length % 2;
    if (remainder === 0) {
      const amountPerCol = Math.floor(length / 2);
      for (let i = 0; i < amountPerCol; i++) {
        thumbnailArrayFirstElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol; i < amountPerCol * 2; i++) {
        thumbnailArraySecondElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }

      return (
        <>
          <div>{thumbnailArrayFirstElement}</div>
          <div>{thumbnailArraySecondElement}</div>
        </>
      );
    } else if (remainder === 1) {
      const amountPerCol = Math.ceil(length / 2);
      for (let i = 0; i < amountPerCol; i++) {
        thumbnailArrayFirstElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }
      for (let i = amountPerCol; i < amountPerCol * 2 - 1; i++) {
        thumbnailArraySecondElement.push(
          <BookPreview
            key={thumbnailArray[i].sys.id}
            width={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
            }
            height={
              thumbnailArray[i].fields.thumbnail.fields.file.details.image
                .height
            }
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
            slug={
              slugName ? `/${slugName}/${thumbnailArray[i].fields.slug}` : ""
            }
            title={thumbnailArray[i].fields.title}
          />
        );
      }

      return (
        <>
          <div>{thumbnailArrayFirstElement}</div>
          <div>{thumbnailArraySecondElement}</div>
        </>
      );
    }
  }
}
