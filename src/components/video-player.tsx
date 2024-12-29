import Image from "next/image";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
  artistName: string;
  artistImageSrc: string;
  views: number;
}

export function VideoPlayer({
  videoSrc,
  thumbnailSrc,
  title,
  artistName,
  artistImageSrc,
  views,
}: VideoPlayerProps) {
  const formattedViews = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(views);

  return (
    <div className="w-full">
      <div className="relative aspect-video">
        <Image
          src={thumbnailSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-primary opacity-75"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-primary">{title}</h2>
      <div className="mt-2 flex items-center space-x-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={artistImageSrc}
            alt={artistName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-primary-foreground">
            {artistName}
          </p>
          <p className="text-xs text-muted-foreground">
            {formattedViews} views
          </p>
        </div>
      </div>
    </div>
  );
}
