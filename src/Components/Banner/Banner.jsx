import React from "react";
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 my-4 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold w-2/3 mb-4 ">Books to freshen up your bookshelf</h1>
          
          <button className="btn bg-green-600 text-white font-bold text-xl">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
