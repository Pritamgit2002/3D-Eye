"use client";
import Spline from "@splinetool/react-spline";
export default function Home() {
  return (
    <div className=" text-4xl font-medium  bg-black h-screen relative ">
      <span className=" text-center text-white font-black flex items-center justify-center w-full underline absolute ">
        Have a Look!
      </span>
      <div className=" w-full h-full        ">
        <Spline scene="https://prod.spline.design/RJ8tnxhq2RN-q9PM/scene.splinecode" />
      </div>
    </div>
  );
}
