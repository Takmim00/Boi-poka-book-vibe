import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addTOStoreReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    tags,
    category,
    review,
  } = book;

  const handleReadList = (id) => {
    addTOStoreReadList(id);
  };

  return (
    <div class="  ">
      <div class=" flex flex-col lg:flex-row gap-8">
        <div className="px-10 py-10 bg-[#F3F3F3] items-center rounded-xl">
          <img src={image} class="max-w-sm " />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{bookName}</h2>
          <p className="font-medium text-xl">By : {author}</p>
          <hr className="border border-dashed" />

          <p className="font-medium text-xl text-gray-500">{category}</p>
          <hr className="border border-dashed" />

          <p>
            <span className="font-bold">Review : </span> {review}
          </p>

          <div className=" ">
            Tag :
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className=" badge text-green-500 py-3 bg-[#23BE0A0D] font-medium"
              >
                {tag}
              </div>
            ))}
          </div>
          <hr className="border border-dashed" />
          <div className="card-actions justify-between">
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
            <hr className="border border-dashed" />
          </div>
          <hr className="border border-dashed" />

          <div className="flex gap-6">
            <button
              onClick={() => handleReadList(bookId)}
              className="btn btn-outline btn-accent"
            >
              Read
            </button>
            <button className="btn btn-accent">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
