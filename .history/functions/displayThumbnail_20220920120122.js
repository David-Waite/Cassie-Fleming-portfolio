import BookPreview from "../components/BookPreview";
import React from "react";

export default function displayThumbnail(thumbnailArray) {
  const length = thumbnailArray.length;
  console.log(BookPreview);

  const amountPerCol = length % 3;
  console.log(amountPerCol);
  let thumbnailArrayElement = [];
  thumbnailArrayElement.push();
  let thumbnailArrayFirstElement = ["<div>"];
  let thumbnailArraySecondElement = ["<div>"];
  let thumbnailArrayThirdElement = ["<div>"];
  if (amountPerCol === 1) {
    for (let i = 0; i < amountPerCol; i++) {
      thumbnailArrayFirstElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayFirstElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayFirstElement);
    for (let i = amountPerCol; i < amountPerCol * 2; i++) {
      thumbnailArraySecondElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArraySecondElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArraySecondElement);
    for (let i = amountPerCol * 2; i < amountPerCol * 3 + 1; i++) {
      thumbnailArrayThirdElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayThirdElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayThirdElement);
    console.log(thumbnailArrayElement);
    thumbnailArrayElement.push("</div>");
    return thumbnailArrayElement;
  } else if (amountPerCol === 2) {
    for (let i = 0; i < amountPerCol; i++) {
      thumbnailArrayFirstElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayFirstElement.push("</div>");

    for (let i = amountPerCol; i < amountPerCol * 2; i++) {
      thumbnailArraySecondElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArraySecondElement.push("</div>");

    for (let i = amountPerCol * 2; i < amountPerCol * 3 - 1; i++) {
      thumbnailArrayThirdElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayThirdElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayThirdElement);
    console.log(thumbnailArrayElement);
    thumbnailArrayElement.push("</div>");
    return thumbnailArrayElement;
  } else if (amountPerCol === 0) {
    for (let i = 0; i < amountPerCol; i++) {
      thumbnailArrayFirstElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayFirstElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayFirstElement);
    for (let i = amountPerCol; i < amountPerCol * 2; i++) {
      thumbnailArraySecondElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArraySecondElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArraySecondElement);
    for (let i = amountPerCol * 2; i < amountPerCol * 3; i++) {
      thumbnailArrayThirdElement.push(
        <BookPreview
          key={thumbnailArray[i].sys.id}
          width={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.width
          }
          height={
            thumbnailArray[i].fields.thumbnail.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.thumbnail.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayThirdElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayThirdElement);
    console.log(thumbnailArrayElement);
    thumbnailArrayElement.push("</div>");
    return thumbnailArrayElement;
  }
}
