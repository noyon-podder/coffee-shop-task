import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const CardSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="lg:py-10 py-5">
        <div className="text-center">
          <span className="text-[#c7a17a] text-xl">Popular Item</span>
          <h2 className="text-3xl font-bold uppercase text-gray-800">
            COFFEE BUILD YOUR BASE.
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-20 px-5 lg:mt-20 mt-10">
            {products?.map((product) => (
              <Card key={product._id} product={product}></Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="menu-list">
              {" "}
              <button className="w-full px-10 py-5 mt-6 text-sm lg:ml-3 tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#333] rounded-lg lg:w-auto hover:bg-[#b6885b] focus:outline-none focus:bg-[#C7A17A]">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection