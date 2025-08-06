
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Grid3X3, Film, Image, RefreshCcw, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  // Coohom Videos
  const videos = [
    {
      id: 1,
      title: 'Coohom Video 1',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Coohom+Video+1',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//cf40cec4-ab73-4a39-bd5d-443ca553e5f9.mov'
    },
    {
      id: 2,
      title: 'Coohom Video 2',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Coohom+Video+2',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//bf581bf8-edbd-415b-8fa2-af52ea0a10bb.mov'
    },
    {
      id: 3,
      title: 'Coohom Video 3',
      thumbnailUrl: 'https://via.placeholder.com/640x360/2C74B3/FFFFFF?text=Coohom+Video+3',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//b7a731aa-c350-49e8-9aba-a14527090cd9.mov'
    },
    {
      id: 4,
      title: 'Coohom Video 4',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Coohom+Video+4',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//7a3e4c4b-d79a-46b9-ab55-d4ab7588e25c.mov'
    }
  ];
  
  // Canva Images
  const images = [
    {
      id: 1,
      title: 'Canva Design 1',
      imageUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//64e0f688-a550-4f16-826a-8aadd7ed91d2.jpeg'
    },
    {
      id: 2,
      title: 'Canva Design 2',
      imageUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//6d59b430-0c69-43af-ac39-6c46bce4cd00.jpeg'
    },
    {
      id: 3,
      title: 'Canva Design 3',
      imageUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//d11015e9-ba80-4b9a-aed8-0826e8e6e5d4.jpeg'
    },
    {
      id: 4,
      title: 'Canva Design 4',
      imageUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//d90de493-3003-4d71-8d68-4f2dc6f9ecd5.jpeg'
    }
  ];

  // Social Content Videos
  const socialContentVideos = [
    {
      id: 1,
      title: 'Social Video 1',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Social+Video+1',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//75d1d80a-b3e8-4b87-b02f-13a5a821a533.mov'
    },
    {
      id: 2,
      title: 'Social Video 2',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Social+Video+2',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//7467622a-3c60-426d-9622-51cb2da54d53.mov'
    },
    {
      id: 3,
      title: 'Social Video 3',
      thumbnailUrl: 'https://via.placeholder.com/640x360/2C74B3/FFFFFF?text=Social+Video+3',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//223fa68d-bc1a-4422-8922-7f2d72939bcc.mov'
    },
    {
      id: 4,
      title: 'Social Video 4',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Social+Video+4',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//1471c42c-56aa-4681-b8b6-d0889cce3e07.mov'
    },
    {
      id: 5,
      title: 'Social Video 5',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Social+Video+5',
      videoUrl: 'https://dfcevziyiolgitizwhmn.supabase.co/storage/v1/object/public/media//da1614a8-02dc-4a40-be3e-1c3c20a52a6c.mov'
    }
  ];

  // Social media accounts data
  const socialMediaAccounts = [
    {
      id: 1,
      platform: 'Instagram',
      handle: 'mira_bhayandar_projects',
      url: 'https://www.instagram.com/mira_bhayandar_projects/?hl=en',
      icon: <Instagram className="h-5 w-5" />
    },
    {
      id: 2,
      platform: 'Instagram',
      handle: 'premium_project_bhayandar_',
      url: 'https://www.instagram.com/premium_project_bhayandar_/?hl=en',
      icon: <Instagram className="h-5 w-5" />
    }
  ];

  const [isGridView, setIsGridView] = useState(true);
  const [activeTab, setActiveTab] = useState("coohom");
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
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-3 h-auto">
            <TabsTrigger value="coohom" className="py-3">
              <Film className="mr-2 h-4 w-4" /> Coohom Videos
            </TabsTrigger>
            <TabsTrigger value="canva" className="py-3">
              <Image className="mr-2 h-4 w-4" /> Canva Video
            </TabsTrigger>
            <TabsTrigger value="social" className="py-3">
              <Instagram className="mr-2 h-4 w-4" /> Social Content Video
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="coohom" className="space-y-4">
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
          
          <TabsContent value="canva" className="space-y-4">
            <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {images.map(image => (
                <ImageCard
                  key={image.id}
                  title={image.title}
                  imageUrl={image.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="space-y-4">
            <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {socialContentVideos.map(video => (
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
