import bookPreview from "../components/BookPreview";

function displayThumbnail(thumbnailArray) {
  const length = thumbnailArray.length;
  if (length <= 3) {
    const animationsElements = animations.map((animation) => {
      return (
        <BookPreview
          key={animation.sys.id}
          width={animation.fields.thumbnail.fields.file.details.image.width}
          height={animation.fields.thumbnail.fields.file.details.image.height}
          src={animation.fields.thumbnail.fields.file.url}
          alt={animation.fields.title}
          slug={`/animations/${animation.fields.slug}`}
        />
      );
    });
  }
}
