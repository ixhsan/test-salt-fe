"use client"

import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import CardIdentity from "./cardidentity/CardIdentity";

const Identity = () => {
  const identity = [
    {
      title: "Who we are",
      subtitle: "Technology Company",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste consequuntur accusamus saepe commodi repellat aspernatur tempore distinctio praesentium maiores cumque.",
    },
    {
      title: "What we do",
      subtitle: "Professional Brand Management",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste consequuntur accusamus saepe commodi repellat aspernatur tempore distinctio praesentium maiores cumque.",
    },
    {
      title: "How we do",
      subtitle: "Strategize, Design, Collaborate",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste consequuntur accusamus saepe commodi repellat aspernatur tempore distinctio praesentium maiores cumque.",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-2 bg-white" id="identity">
        {identity.map((item, index) => (
          <CardIdentity
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            descriptions={item.descriptions}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly my-10">
        <div>
          <p className="font-normal text-lg text-gray-400">
            <span className="font-bold text-2xl text-black">
              01 <span className="text-gray-400">/</span>
            </span>
            03
          </p>
        </div>
        <div className="flex flex-row">
          <button className="flex self-center border p-5 cursor-pointer bg-gray-300">
            <GrLinkPrevious color="gray" />
          </button>
          <button className="flex self-center border p-5 cursor-pointer bg-[#029FE4]">
            <GrLinkNext color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Identity;
