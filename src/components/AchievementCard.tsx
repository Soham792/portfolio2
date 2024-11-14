import React from 'react';

interface AchievementCardProps {
  imageUrl: string;
  altText: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ imageUrl, altText }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default AchievementCard;