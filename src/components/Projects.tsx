
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Grid3X3, Film, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  // These would be replaced with actual URLs from Supabase storage
  const videos = [
    {
      id: 1,
      title: '3BHK Launch Campaign',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=3BHK+Launch+Campaign',
      videoUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Video%202025-04-11%20at%201.35.09%20AM.mp4'
    },
    {
      id: 2,
      title: 'Virtual Site Walkthrough',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Virtual+Site+Walkthrough',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Diwali Promo Ad',
      thumbnailUrl: 'https://via.placeholder.com/640x360/2C74B3/FFFFFF?text=Diwali+Promo+Ad',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Client Testimonials',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Client+Testimonials',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 5,
      title: 'Property Teaser Video',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Property+Teaser',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const [isGridView, setIsGridView] = useState(true);
  const { toast } = useToast();

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
    toast({
      title: `Switched to ${isGridView ? 'List' : 'Grid'} view`,
      duration: 2000
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-portfolio-softGray">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="section-title">Projects</h2>
          <Button variant="outline" className="mt-4 md:mt-0 hover:bg-portfolio-navy hover:text-white" onClick={handleViewToggle}>
            {isGridView ? <Film className="mr-2" /> : <Grid3X3 className="mr-2" />}
            {isGridView ? "List View" : "Grid View"}
          </Button>
        </div>
        
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-1 h-auto">
            <TabsTrigger value="videos" className="py-3">
              <Film className="mr-2 h-4 w-4" /> Video Campaigns
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="space-y-4">
            <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {videos.map(video => (
                <VideoCard 
                  key={video.id}
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                  isCompact={!isGridView}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group hover:bg-portfolio-navy hover:text-white">
            <RefreshCcw className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
