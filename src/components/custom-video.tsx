// components/custom-video.tsx
import Video from "next-video";
import type { VideoProps } from "next-video";
import { Asset } from "next-video";

interface CustomVideoProps extends VideoProps {
  artistName: string;
  artistImageSrc: string;
  views: number;
}

export function CustomVideo({
  src,
  artistName,
  artistImageSrc,
  views,
  ...props
}: CustomVideoProps) {
  return (
    <div className="video-container">
      <Video src={src} {...props} />
      <div className="video-metadata mt-4 flex items-center gap-4">
        <img
          src={artistImageSrc}
          alt={artistName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-medium">{artistName}</div>
          <div className="text-sm text-gray-500">
            {views.toLocaleString()} views
          </div>
        </div>
      </div>
    </div>
  );
}
