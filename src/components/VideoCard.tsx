
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoCard = ({ title, thumbnailUrl, videoUrl }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card h-full">
      <div className="relative">
        {!isPlaying ? (
          <>
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className="w-full h-48 object-cover rounded-md"
            />
            <button 
              onClick={togglePlay} 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md"
            >
              <Play size={48} className="text-white opacity-80" />
            </button>
          </>
        ) : (
          <div className="relative w-full h-48">
            <iframe 
              src={`${videoUrl}?autoplay=1`} 
              title={title}
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              onClick={togglePlay}
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium mt-3">{title}</h3>
    </div>
  );
};

export default VideoCard;
