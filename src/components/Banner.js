import React from "react";

const Banner = () => {
  return (
    <section className="hero">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div
            className="w-full lg:w-1/2"
            style={{
              backgroundImage:
                "url("+ "https://i.ibb.co/hsF1f0S/hero-shape-2-1.png" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="lg:max-w-lg">
              <h1 className="text-3xl text-black  lg:text-6xl font-bold uppercase">
                Distinct coffee aroma
              </h1>

              <p className="mt-3 text-gray-600 ">
                Globally reintermediate enterprise experiences for resource
                sucking applications. Proactively fabricate open-source growth.
              </p>

              <button className="w-full px-8 py-4 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#b6885b] rounded-lg lg:w-auto hover:bg-[#333] focus:outline-none focus:bg-[#C7A17A]">
                Shop Now
              </button>
              <button className="w-full px-8 py-4 mt-6 text-sm lg:ml-3 tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#333] rounded-lg lg:w-auto hover:bg-[#b6885b] focus:outline-none focus:bg-[#C7A17A]">
                Check Menu
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-3/4 h-full lg:max-w-xl "
              src="https://i.ibb.co/BVWVSSt/hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
