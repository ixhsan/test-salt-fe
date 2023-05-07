"use client";

interface CardValuesProps {
  title: string;
  description: string;
}

const CardValues: React.FC<CardValuesProps> = ({ title, description }) => {
  return (
    <>
      <div className="p-5">
        <h3 className="font-normal text-2xl">{title}</h3>
        <p className="font-light text-lg">{description}</p>
      </div>
    </>
  );
};

export default CardValues;
