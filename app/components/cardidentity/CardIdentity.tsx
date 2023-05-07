"use client"

interface CardIdentityProps {
  title: string;
  subtitle: string;
  descriptions: string;
}

const CardIdentity: React.FC<CardIdentityProps> = ({
  title,
  subtitle,
  descriptions,
}) => {
  return (
    <div className="p-10 max-w-40">
      <h2 className="font-medium text-4xl text-[#029FE4] my-5">{title}</h2>
      <h4 className="font-normal">{subtitle}</h4>
      <p className="font-light text-lg">{descriptions}</p>
    </div>
  );
};

export default CardIdentity;
