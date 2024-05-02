import React from "react";

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
      className={`min-h-[230px] text-center max-w-[290px] bg-slate-100 flex flex-col items-center justify-around p-4 transform transition-transform hover:scale-105 ${className}`}
    >
      <div className="relative overflow-hidden rounded-md">
        <img loading="lazy" src={image} alt={title} className="w-full h-auto" />
      </div>
      <h4 className="text-black text-xl">{title}</h4>
      <p className="text-sm text-music-title">{desc}</p>
    </div>
  );
};

export default MusicCard;
