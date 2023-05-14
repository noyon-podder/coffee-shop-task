import React, { useEffect, useState } from 'react';
import Card from './Card';

const MenuListWrapper = () => {
    const [menuItems, setMenuItems] = useState([]);
     useEffect(() => {
       fetch("https://coffe-shop-server.vercel.app/menu-list")
         .then((res) => res.json())
         .then((data) => setMenuItems(data));
     }, []);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="lg:py-10 py-5">
        <div className="text-center">
          <span className="text-[#c7a17a] text-xl">Popular Item</span>
          <h2 className="text-3xl font-bold uppercase text-gray-800">
            COFFEE BUILD YOUR BASE.
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-20 px-5 lg:mt-20 mt-10">
            {menuItems?.map((product) => (
              <Card key={product._id} product={product}></Card>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MenuListWrapper