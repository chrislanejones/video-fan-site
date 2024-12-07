import { SearchBar } from "@/components/search-bar";
import { VideoPlayer } from "@/components/video-player";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { Sidebar } from "@/components/sidebar";

import fs from "fs";
import path from "path";
import Video from "next-video";
import awesomeVideo from "/videos/get-started.mp4.json";

// Function to get videos from the public folder
export async function getStaticProps() {
  const videosDirectory = path.join(process.cwd(), "public/videos");

  try {
    const videoFiles = fs
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

    return {
      props: {
        videos: videoFiles,
      },
    };
  } catch (error) {
    console.error("Error reading videos directory:", error);
    return {
      props: {
        videos: [],
      },
    };
  }
}

export default function Home({ videos }) {
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
