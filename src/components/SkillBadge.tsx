import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300';
      case 'Intermediate':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300';
      case 'Basic':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300';
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <span className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {name}
      </span>
      <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor()}`}>
        {level}
      </span>
    </div>
  );
};

export default SkillBadge;