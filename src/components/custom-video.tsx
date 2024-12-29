import Video, { VideoProps } from "next-video";
import Image from "next/image";

interface CustomVideoProps {
  src: any; // Using any for the video source type since we don't have access to the internal Asset type
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
        <Image
          src={artistImageSrc}
          alt={artistName}
          width={40}
          height={40}
          className="rounded-full object-cover"
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
