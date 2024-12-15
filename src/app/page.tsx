import { SearchBar } from "@/components/search-bar";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { Sidebar } from "@/components/sidebar";
import Video from "next-video";
import awesomeVideo from "/videos/get-started.mp4.json";
import fs from "fs";
import path from "path";
import Link from "next/link";
import UploadModal from "@/components/upload-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define the type for a video object
interface Video {
  id: string;
  title: string;
  thumbnailSrc: string;
  videoSrc: string;
}

// Server-side function to fetch videos
async function getVideos(): Promise<Video[]> {
  const videosDirectory = path.join(process.cwd(), "public/videos");

  try {
    const videoFiles: Video[] = fs
      .readdirSync(videosDirectory)
      .filter(
        (file) =>
          file.endsWith(".mp4") ||
          file.endsWith(".webm") ||
          file.endsWith(".mov")
      )
      .map((file) => ({
        id: file.replace(/\.[^/.]+$/, ""),
        title: file.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
        thumbnailSrc: `/photos/placeholder.webp?height=180&width=320`,
        videoSrc: `/videos/${file}`,
      }));

    return videoFiles;
  } catch (error) {
    console.error("Error reading videos directory:", error);
    return [];
  }
}

// This is now a Server Component
export default async function Home() {
  const videos = await getVideos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background dark">
      <header className="sticky px-2 top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <SearchBar />
      </header>
      <main className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-56 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex-grow space-y-8">
            <Video src={awesomeVideo} />
            <section>
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                >
                  More Info
                </Link>
                <Button onClick={() => setIsModalOpen(true)}>
                  Upload Video
                </Button>
                <UploadModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Other Videos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.slice(0, 6).map((video) => (
                  <VideoThumbnail key={video.id} {...video} />
                ))}
              </div>
            </section>
            {videos.length > 6 && (
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {videos.slice(6, 8).map((video) => (
                    <VideoThumbnail key={video.id} {...video} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
