import gsap from "gsap";
import React,{ useRef } from "react";
const Home = () => {
  const solutionRef = useRef(null);
  const productRef = useRef(null);

  const buttonRefFirst = useRef(null);
  const buttonRefSecond = useRef(null);

  const whiteScreenRef = useRef(null);
  const handleExpand = (ref) => {
    gsap.to(ref.current, {
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      borderRadius: 0,
      duration: 1, // 1 second animation
      ease: "power3.inOut",
      zIndex: 1,
      onComplete:()=>{
        buttonRefFirst.current.style.display = "none";
        buttonRefSecond.current.style.display = "none";
        gsap.to(whiteScreenRef.current, {
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          borderRadius: 0,
          duration: 1, // 1 second animation
          ease: "power3.inOut",
          zIndex:2
        })
      }
    });
    gsap.to(buttonRefFirst.current, {
      duration: 1, // 1 second animation
      ease: "power3.inOut",
      right: "-1000%",
    });
    gsap.to(buttonRefSecond.current, {
       right: "-1000%",
      duration: 1, // 1 second animation
      ease: "power3.inOut",
    });
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* white screen */}
      <div ref={whiteScreenRef} className="absolute w-[0px] h-[0px] bg-white bottom-0 left-0"/>
      <div className="flex flex-col gap-3 w-1/2  mt-40 ml-20 pb-10 justify-around border-2 border-amber-400">
        <h1 className="text-4xl font-bold">GENTHERM</h1>
        <div className="text-8xl ">
          <p>Technology</p>
          <p>To Next Degree</p>
        </div>
        <div className="flex gap-6 ">
          <button
            onClick={() => handleExpand(solutionRef)}
            className="cursor-pointer w-[200px] py-[10px] text-black text-sm"
          >
            Explore by
            <div
              ref={solutionRef}
              className="absolute  bg-green-700  z-[-1]  w-[200px] h-[68px] top-[80.3%]"
            />
            <hr className="text-green-700" />
            <p className="text-xl relative" ref={buttonRefFirst}>
              Solution
            </p>
          </button>
          <button
            onClick={() => handleExpand(productRef)}
            className="cursor-pointer text-black w-[200px] text-sm"
          >
            Explore by
            <div
              ref={productRef}
              className="absolute  bg-green-700  z-[-1]  w-[200px] h-[68px] top-[80.3%]"
            />
            <hr className="text-green-700" />
            <p className="text-xl relative" ref={buttonRefSecond}>
              Products
            </p>
          </button>
        </div>
      </div>
      {/* image */}
      <div></div>
    </div>
  );
};

export default Home;
