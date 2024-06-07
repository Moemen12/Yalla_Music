import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MusicCardProps {
  title: string;
  desc: string;
  image: string;
  className?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  desc,
  image,
  className = "",
}) => {
  return (
    <div
      className={`min-h-[230px] text-center rounded-md text-white max-w-[290px] bg-card-color flex flex-col items-center justify-around p-4 transform transition-transform hover:scale-105 ${className}`}
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden rounded-md">
        <img loading="lazy" src={image} alt={title} className="w-full h-auto" />
      </div>
      <h4 className="text-xl">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default MusicCard;
