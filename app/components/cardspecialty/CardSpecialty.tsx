"use client"

import Image from "next/image";

interface CardSpecialtyProps {
  title: string;
  image: string;
  descriptions: string;
}

const CardSpecialty: React.FC<CardSpecialtyProps> = ({
  title,
  image,
  descriptions,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt={title.toLowerCase()}
      />
      <figcaption className="font-normal">{title}</figcaption>
      <p className="font-thin text-sm text-justify">{descriptions}</p>
    </div>
  );
};

export default CardSpecialty;
