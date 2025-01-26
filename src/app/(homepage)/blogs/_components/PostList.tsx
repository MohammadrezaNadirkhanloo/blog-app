import Link from "next/link";
import { RxLapTimer } from "react-icons/rx";
import Author from "./Author";
import CoverImage from "./CoverImage";
import PostInteraction from "./PostInteraction";
import { Post } from "@/utils/types";

async function PostList({ posts }: { posts: Post[] }) {
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8 ">
      {posts.map((post) => (
        <div
          key={post._id}
          className="card bg-base-200 shadow-xl dark:shadow-sm dark:shadow-primary  col-span-12 sm:col-span-6 lg:col-span-4 static "
        >
          <div className=" ">
            <CoverImage {...post} />
          </div>
          <div className="card-body pb-2">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="card-title"> {post.title}</h2>
            </Link>
            {/* post author - readingTime */}
            <div className="flex items-center justify-between my-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <RxLapTimer className="w-4 h-4 ml-1" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
          <PostInteraction {...post} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
