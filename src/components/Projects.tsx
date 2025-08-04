
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Grid3X3, Film, Image, RefreshCcw, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  // These would be replaced with actual URLs from Supabase storage
  const videos = [
    {
      id: 1,
      title: '1BHK Launch Campaign',
       thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Digital+Marketing+Portfolio+%7C+Click+to+Play',
      videoUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Video%202025-04-11%20at%201.35.09%20AM.mp4'
    },
    {
      id: 2,
      title: '1BHK & 2BHK Launch Campaign',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Virtual+Site+Walkthrough',
      videoUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Video%202025-04-11%20at%201.35.30%20AM.mp4'
    },
    {
      id: 3,
      title: '1BHK & 2BHK & Jodi Option Launch Campaign',
      thumbnailUrl: 'https://via.placeholder.com/640x360/2C74B3/FFFFFF?text=Diwali+Promo+Ad',
      videoUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Video%202025-04-11%20at%201.35.31%20AM%20(1).mp4'
    },
    {
      id: 4,
      title: 'SKYLINE',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Client+Testimonials',
      videoUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Video%202025-04-11%20at%201.35.32%20AM.mp4'
    }
  ];
  
  // Sample images data
  const images = [
    {
      id: 1,
      title: 'Property Exterior Shot',
      imageUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Image%202025-04-11%20at%201.35.31%20AM.jpeg'
    },
    {
      id: 2,
      title: 'Modern Interior Design',
      imageUrl: 'https://pqolkeztotszaehikkdq.supabase.co/storage/v1/object/public/kreeti//WhatsApp%20Image%202025-04-11%20at%201.35.32%20AM.jpeg'
    },
    {
      id: 3,
      title: 'Promotional Poster',
      imageUrl: 'https://via.placeholder.com/800x600/2C74B3/FFFFFF?text=Promo+Poster'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      imageUrl: 'https://via.placeholder.com/800x600/0A2647/FFFFFF?text=Social+Media'
    },
    {
      id: 5,
      title: 'Brand Style Guide',
      imageUrl: 'https://via.placeholder.com/800x600/144272/FFFFFF?text=Brand+Guide'
    },
    {
      id: 6,
      title: 'Event Photography',
      imageUrl: 'https://via.placeholder.com/800x600/2C74B3/FFFFFF?text=Event+Photos'
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
  const [activeTab, setActiveTab] = useState("videos");
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
            <TabsTrigger value="videos" className="py-3">
              <Film className="mr-2 h-4 w-4" /> Videos
            </TabsTrigger>
            <TabsTrigger value="images" className="py-3">
              <Image className="mr-2 h-4 w-4" /> Canva Video
            </TabsTrigger>
            <TabsTrigger value="social" className="py-3">
              <Instagram className="mr-2 h-4 w-4" /> Social Content Video
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
          
          <TabsContent value="images" className="space-y-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialMediaAccounts.map(account => (
                <Card key={account.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-4">
                      <div className="bg-portfolio-accent text-white rounded-full p-3">
                        {account.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{account.platform}</h3>
                        <p className="text-gray-600 mb-3">@{account.handle}</p>
                        <a 
                          href={account.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-portfolio-navy hover:text-portfolio-accent transition-colors font-medium"
                        >
                          View Profile
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
