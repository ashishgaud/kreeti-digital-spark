
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  isCompact?: boolean;
}

const VideoCard = ({ title, thumbnailUrl, videoUrl, isCompact = false }: VideoCardProps) => {
  const [showControls, setShowControls] = useState(false);

  const handleVideoClick = () => {
    setShowControls(true);
  };

  return (
    <Card className={`overflow-hidden ${isCompact ? 'flex flex-row' : ''} hover:shadow-xl transition-shadow duration-300`}>
      <div className={`relative ${isCompact ? 'w-1/3' : 'w-full'}`}>
        <div className="aspect-video w-full h-full">
          {videoUrl.includes('youtube.com') ? (
            <iframe 
              src={`${videoUrl}?autoplay=1&mute=1&loop=1`} 
              title={title}
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          ) : (
            <video 
              src={videoUrl} 
              title={title}
              className="w-full h-full object-cover cursor-pointer"
              autoPlay
              muted
              loop
              playsInline
              controls={showControls}
              onClick={handleVideoClick}
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            ></video>
          )}
        </div>
      </div>
      <CardContent className={`${isCompact ? 'w-2/3 flex items-center' : 'pt-4'}`}>
        <h3 className="font-semibold text-lg text-portfolio-navy">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
