import BookPreview from "../components/BookPreview";

export default function displayThumbnail(thumbnailArray, width) {
  const length = thumbnailArray.length;
  const remainder = length % 3;
  let thumbnailArrayFirstElement = [];
  let thumbnailArraySecondElement = [];
  let thumbnailArrayThirdElement = [];
  if (width > 1000) {
    if (remainder === 1) {
      const amountPerCol = Math.floor(length / 3);
      for (let i = 0; i < amountPerCol + 1; i++) {
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
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
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
          />
        );
      }
      for (let i = amountPerCol + 1; i < amountPerCol * 2; i++) {
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
    if (remainder === 0) {
      const amountPerCol = Math.floor(length / 3);
      for (let i = 0; i < amountPerCol + 1; i++) {
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
            src={thumbnailArray[i].fields.thumbnail.fields.file.url}
            alt={thumbnailArray[i].fields.title}
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
