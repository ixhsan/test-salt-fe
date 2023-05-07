"use client"

import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/banner.jpg"
        width={1280}
        height={700}
        alt="Hero"
        className="mx-auto"
      />
      <div
        className="
          bg-[#4097DB]
          p-10
          "
      >
        <h2 className="font-medium text-4xl text-white my-5">
          Discover your wonder
        </h2>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptatum ducimus facilis corporis cum veniam ipsum nam perspiciatis,
          consequuntur quasi nobis eligendi iusto laborum quae aspernatur.
          Quaerat odit et illo!
        </p>
      </div>
    </div>
  );
};

export default Hero;
