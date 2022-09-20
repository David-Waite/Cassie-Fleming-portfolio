import bookPreview from "../components/BookPreview";

function displayThumbnail(thumbnailArray) {
  const length = thumbnailArray.length;
  const amountPerCol = length % 3;
  let thumbnailArrayElement = [];
  let thumbnailArrayFirstElement = ["<div>"];
  let thumbnailArraySecondElement = ["<div>"];
  if (amountPerCol === 1) {
    for (let i = 0; i < amountPerCol; i++) {
      thumbnailArrayFirstElement.push(
        <bookPreview
          key={thumbnailArray[i].sys.id}
          width={thumbnailArray[i].fields.image.fields.file.details.image.width}
          height={
            thumbnailArray[i].fields.image.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.image.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArrayFirstElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArrayFirstElement);
    for (let i = amountPerCol; i < amountPerCol * 2; i++) {
      thumbnailArraySecondElement.push(
        <bookPreview
          key={thumbnailArray[i].sys.id}
          width={thumbnailArray[i].fields.image.fields.file.details.image.width}
          height={
            thumbnailArray[i].fields.image.fields.file.details.image.height
          }
          src={thumbnailArray[i].fields.image.fields.file.url}
          alt={thumbnailArray[i].fields.title}
        />
      );
    }
    thumbnailArraySecondElement.push("</div>");
    thumbnailArrayElement.push(thumbnailArraySecondElement);
    for (let i = amountPerCol; i < amountPerCol * 2; i++) {
        thumbnailArraySecondElement.push(
          <bookPreview
            key={thumbnailArray[i].sys.id}
            width={thumbnailArray[i].fields.image.fields.file.details.image.width}
            height={
              thumbnailArray[i].fields.image.fields.file.details.image.height
            }
            src={thumbnailArray[i].fields.image.fields.file.url}
            alt={thumbnailArray[i].fields.title}
          />
        );
      }
      thumbnailArraySecondElement.push("</div>");
      thumbnailArrayElement.push(thumbnailArraySecondElement);
    }
  }
}

// remainder length  % 3
// if remainder = 1

//10 / 3 = 3.333 floor = 3
//10 / 3 = 3.333 floor = 3
//10 / 3 = 3.333 floor = 3
// total 9
// remainder 1
// put 1 in the first column
// div 4
// div 3
// div 3

// amountPerCol = length / 3

/*
    <div>
        <div>
            for (let i = 0; i < amountPerCol; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
            }
        </div>
        <div>
            for (let i = amountPerCol; i < amountPerCol + amountPerCol; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
            }
        </div>
        <div>
            for (let i = amountPerCol * 2; i < (amountPerCol * 3) + 1; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
        </div>
    </div>
    */

// if remainder = 2

//11 / 3 = 3.66 ceil = 4
//11 / 3 = 3.66 ceil = 4
//11 / 3 = 3.66 ceil = 4
// total 12

// remainder = - 1
// take 1 from the last column
// div 4
// div 4
// div 3

// amountPerCol = length / 3 ciel
/*
    <div>
        <div>
            for (let i = 0; i < amountPerCol; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
            }
        </div>
        <div>
            for (let i = amountPerCol; i < amountPerCol + amountPerCol; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
            }
        </div>
        <div>
            for (let i = amountPerCol * 2; i < (amountPerCol * 3) - 1; i++) {
                <BookPreview
                    key={thumbnailArray[i].sys.id}
                    width={
                    thumbnailArray[i].fields.image.fields.file.details.image.width
                    }
                    height={
                    thumbnailArray[i].fields.image.fields.file.details.image.height
                    }
                    src={thumbnailArray[i].fields.image.fields.file.url}
                    alt={thumbnailArray[i].fields.title}
                />
        </div>
    </div>
    */

// devide by three
