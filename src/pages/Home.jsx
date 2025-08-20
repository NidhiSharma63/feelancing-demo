import gsap from "gsap";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const solutionRef = useRef(null);
  const productRef = useRef(null);

  const buttonRefFirst = useRef(null);
  const buttonRefSecond = useRef(null);

  const whiteScreenRef = useRef(null);

  const navigate = useNavigate();
  const handleExpand = (ref) => {
    const tl = gsap.timeline();

    // 1. Buttons fade + slide out
    tl.to([buttonRefFirst.current, buttonRefSecond.current], {
      opacity: 0,
      x: 100,
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.1,
      onComplete: () => {
        buttonRefFirst.current.style.display = "none";
        buttonRefSecond.current.style.display = "none";
      },
    });

    // 2. Green block expand
    tl.to(
      ref.current,
      {
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        borderRadius: 0,
        duration: 1.2,
        ease: "expo.inOut",
        zIndex: 1,
        onComplete: () => {
          // whiteScreenRef.current.style.zIndex = "2";
        }
      },
      "<" // thoda overlap for smoothness
    );

    // 3. White screen overlay expand
    tl.to(
      whiteScreenRef.current,
      {
        height: "100vh",
        borderRadius: 0,
        duration: 1,
        ease: "expo.inOut",
        zIndex: 2,
        top:0,
        onComplete: () => {
          navigate("/solution");
        }
      },
      "-=0.1" // green expand ke saath hi start ho jaye
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* white screen */}
      <div
        ref={whiteScreenRef}
        className="absolute w-[100%] h-[10px] bg-white bottom-0 z-[2] overflow-hidden"
      />
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
