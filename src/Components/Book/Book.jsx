import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,bookName, author, image, tags, category ,rating, totalPages} = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 border-2 ">
        <div className="px-10 pt-10">
          <figure className="px-10 py-10 bg-[#F3F3F3] items-center rounded-xl">
            <img src={image} alt={bookName} className="h-[166px]" />
          </figure>
        </div>
        <div className="card-body">
          <div className="card-actions ">
            {tags.map((tag,idx) => (
              <div key={idx} className=" badge text-green-500 py-3 bg-[#23BE0A0D] font-medium">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary font-medium">NEW</div>
          </h2>
          <p>By : {author}</p>
          <hr className="border border-dashed" />
          <div className="card-actions justify-between">
            <div className="font-medium text-gray-500">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
