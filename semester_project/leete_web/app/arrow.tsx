import React from 'react';

export interface ArrowProps {
  isAtBottom: boolean;
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ isAtBottom, onClick }) => {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 transition-transform duration-300 ease-in-out w-12 h-12 flex items-center justify-center`}
      onClick={onClick}
    >
      <div
        className={`w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent animate-pulse ${
          isAtBottom
            ? 'border-b-[20px] border-b-[#F97316]' // Points up when at the bottom
            : 'border-t-[20px] border-t-[#F97316]' // Points down otherwise
        }`}
      ></div>
    </div>
  );
};

export default Arrow;
