import Image from "next/image";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
}

export function VideoPlayer({
  videoSrc,
  thumbnailSrc,
  title,
}: VideoPlayerProps) {
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
    </div>
  );
}
