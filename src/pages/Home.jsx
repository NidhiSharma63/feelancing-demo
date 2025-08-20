import React from "react";
const Home = () => {
  return (
    <div className="flex h-screen">
      {/*  */}
      <div className="flex flex-col gap-3 w-1/2  mt-40 ml-20 pb-10 justify-around border-2 border-amber-400">
        <h1 className="text-4xl font-bold">GENTHERM</h1>
        <div className="text-8xl ">
          <p>Technology</p>
          <p>To Next Degree</p>
        </div>
        <div className="flex gap-6 ">
          <button className="cursor-pointer w-[200px] py-[10px] text-white text-sm">
            Explore by
            <div className="absolute  bg-green-700  z-[-1]  w-[200px] h-[68px] top-[80.3%]"></div>
            <hr className="text-green-700" />
            <p className="text-xl">Solution</p>
          </button>
          <button className=" cursor-pointer text-white w-[200px] text-sm">
            Explore by
            <div className="absolute  bg-green-700  z-[-1]  w-[200px] h-[68px] top-[80.3%]"></div>

            <hr className="text-green-700" />
            <p className="text-xl">Products</p>
          </button>
        </div>
      </div>
      {/* image */}
      <div></div>
    </div>
  );
};

export default Home;
