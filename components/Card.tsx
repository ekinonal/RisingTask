import React from "react";

interface CardProps {
  title: string;
  value: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-full">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-black">{value}</p>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default Card;
