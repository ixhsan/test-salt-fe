"use client";

import Image from "next/image";
import CardValues from "./cardvalues/CardValues";

const Values = () => {
  const values = [
    {
      title: "Our Dedication",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis itaque voluptatum dolorum cumque voluptates eius, esse quaerat inventore ipsum commodi.",
    },
    {
      title: "Intellectual Honesty",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis itaque voluptatum dolorum cumque voluptates eius, esse quaerat inventore ipsum commodi.",
    },
    {
      title: "Curiosity",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis itaque voluptatum dolorum cumque voluptates eius, esse quaerat inventore ipsum commodi.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#CEE3F7] p-5" id="values">
      <div className="p-5">
        <h2 className="font-medium text-4xl text-[#029FE4] my-2">
          Our Core Values
        </h2>
        <p className="font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
          ratione voluptatibus ad doloremque voluptatum magnam saepe,
          dignissimos eum odit deserunt quaerat labore, dolore fuga.
        </p>
        <br />
        <p className="font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt,
          ad ea assumenda repellat recusandae.
        </p>
      </div>
      <div className="px-5">
        {values.map((item, index) => (
          <CardValues
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Image
        src="/images/core-illustration.png"
        width={500}
        height={300}
        alt="core-illustrations"
        className="self-end"
      />
    </div>
  );
};

export default Values;
