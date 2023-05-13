import React from 'react';

const Card = ({product}) => {
  const {name, image, price, description} = product;
  return (
    <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg ">
      <img
        className="object-cover w-full h-56"
        src={image}
        alt="avatar"
      />

      <div className="py-5 px-3">
        <h2 className="text-gray-800 font-bold capitalize text-2xl">{name}</h2>
        <p className="text-gray-400 my-3">{description}</p>
        <div className="flex justify-between ">
          <span className="text-xl text-gray-700">
            <strong>Price</strong>: ${price}
          </span>

          <button className="rounded border px-5 py-2 hover:bg-[#c7a17a] hover:text-white ease-in-out">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card