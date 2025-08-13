
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
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={toggleExpand}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt={title} 
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={toggleExpand}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
