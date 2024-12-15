import fs from "fs";
import path from "path";
import Home from "./home";

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

export default async function Page() {
  const videos = await getVideos();
  return <Home videos={videos} />;
}
