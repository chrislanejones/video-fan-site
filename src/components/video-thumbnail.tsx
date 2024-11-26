import Image from "next/image";
import Link from "next/link";

interface VideoThumbnailProps {
  id: string;
  title: string;
  thumbnailSrc: string;
}

export function VideoThumbnail({
  id,
  title,
  thumbnailSrc,
}: VideoThumbnailProps) {
  return (
    <Link href={`/video/${id}`} className="group">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={thumbnailSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium line-clamp-2 text-primary-foreground group-hover:text-primary">
        {title}
      </h3>
    </Link>
  );
}
