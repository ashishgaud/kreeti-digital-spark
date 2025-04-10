
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageCardProps {
  title: string;
  imageUrl: string;
}

const ImageCard = ({ title, imageUrl }: ImageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="card h-full cursor-pointer" onClick={toggleExpand}>
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-medium mt-3">{title}</h3>
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={toggleExpand}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={toggleExpand}
              className="absolute -top-10 right-0 bg-white rounded-full p-1"
            >
              <X size={24} className="text-portfolio-navy" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
