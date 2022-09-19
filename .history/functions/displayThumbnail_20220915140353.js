import bookPreview from "../components/BookPreview";

function displayThumbnail(thumbnailArray) {
  const length = thumbnailArray.length;
  //need to make three divs with the thumbnails spred between them
  return (
    <div>
      <div>
        {" "}
        <BookPreview
          key={animation.sys.id}
          width={animation.fields.thumbnail.fields.file.details.image.width}
          height={animation.fields.thumbnail.fields.file.details.image.height}
          src={animation.fields.thumbnail.fields.file.url}
          alt={animation.fields.title}
          slug={`/animations/${animation.fields.slug}`}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
