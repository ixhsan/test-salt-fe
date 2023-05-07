"use client";

import CardSpecialty from "./cardspecialty/CardSpecialty";

const Specialty = () => {
  const specialty = [
    {
      title: "Accessories",
      image: "accessories.png",
      decriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores placeat minima obcaecati quas, repudiandae vero pariatur nemo tempore molestiae.",
    },
    {
      title: "Speed",
      image: "speed.png",
      decriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores placeat minima obcaecati quas, repudiandae vero pariatur nemo tempore molestiae.",
    },
    {
      title: "Exhaust",
      image: "exhaust.png",
      decriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores placeat minima obcaecati quas, repudiandae vero pariatur nemo tempore molestiae.",
    },
  ];

  return (
    <div className="bg-[#4097DB] p-10" id="specialty">
      <div className="bg-white p-10">
        <h2 className="font-medium text-3xl text-[#029FE4] text-center mb-5">
          Our Specialty
        </h2>
        <p className="font-light text-sm mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          doloremque est exercitationem vel enim odit atque fugit quam!
          Architecto neque nihil optio suscipit aut dignissimos porro ratione,
          quaerat obcaecati ipsam corporis culpa mollitia maiores! Consequuntur
          nostrum vitae reiciendis debitis, odit perferendis magni nemo
          accusantium illo.
        </p>
        <div className="flex flex-row my-5 gap-8">
          {specialty.map((item, index) => (
            <CardSpecialty
              key={index}
              title={item.title}
              image={item.image}
              descriptions={item.decriptions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialty;
