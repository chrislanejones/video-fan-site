import { SearchBar } from "@/components/search-bar";
import { VideoPlayer } from "@/components/video-player";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { Sidebar } from "@/components/sidebar";
import { Clapperboard } from "lucide-react";

import Video from "next-video";
import awesomeVideo from "/videos/get-started.mp4.json";

const featuredVideo = {
  id: "featured",
  title: "Amazing Landscapes in 4K",
  thumbnailSrc: "/placeholder.svg?height=720&width=1280",
  videoSrc: "#",
};

const otherVideos = Array.from({ length: 8 }, (_, i) => ({
  id: `video-${i + 1}`,
  title: `Awesome Video ${i + 1}`,
  thumbnailSrc: `/photos/placeholder.svg`,
}));

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clapperboard className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">VideoApp</span>
            </div>
            <SearchBar />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-56 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex-grow space-y-8">
            <Video src={awesomeVideo} />;
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Other Videos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherVideos.slice(0, 6).map((video) => (
                  <VideoThumbnail key={video.id} {...video} />
                ))}
              </div>
            </section>
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherVideos.slice(6, 8).map((video) => (
                  <VideoThumbnail key={video.id} {...video} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
