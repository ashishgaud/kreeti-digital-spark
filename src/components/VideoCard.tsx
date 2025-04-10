
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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Card className={`overflow-hidden ${isCompact ? 'flex flex-row' : ''} hover:shadow-xl transition-shadow duration-300`}>
      <div className={`relative ${isCompact ? 'w-1/3' : 'w-full'}`}>
        {!isPlaying ? (
          <div className="relative group cursor-pointer" onClick={handlePlayClick}>
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <Button size="icon" variant="ghost" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 h-12 w-12">
                <Play className="h-6 w-6 text-white fill-white" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full h-full">
            {videoUrl.includes('youtube.com') ? (
              <iframe 
                src={videoUrl} 
                title={title}
                className="w-full h-full"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={videoUrl} 
                title={title}
                className="w-full h-full"
                controls
                autoPlay
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              ></video>
            )}
          </div>
        )}
      </div>
      <CardContent className={`${isCompact ? 'w-2/3 flex items-center' : 'pt-4'}`}>
        <h3 className="font-semibold text-lg text-portfolio-navy">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
