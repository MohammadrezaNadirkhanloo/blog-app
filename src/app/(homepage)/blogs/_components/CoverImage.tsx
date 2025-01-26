import Image from "next/image";
import Link from "next/link";

import { Post } from "@/utils/types";

function CoverImage({ title, coverImageUrl, slug }: Post) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="relative aspect-video overflow-hidden rounded-2xl z-10">
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={90}
          priority={true}
        />
      </div>
    </Link>
  );
}
export default CoverImage;
