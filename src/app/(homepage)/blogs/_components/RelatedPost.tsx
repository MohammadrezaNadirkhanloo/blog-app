import { Post } from "@/utils/types";
import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPost({ posts }: { posts: Post[] }) {
  console.log(posts);

  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((item) => {
          return (
            <div className="card glass col-span-6 md:col-span-3 lg:col-span-2" key={item._id}>
              <div className="relative">
                <CoverImage {...item} />
              </div>
              <div className="card-body p-5 ">
                <h2 className="card-title">{item.title}</h2>
                <div className="card-actions justify-end mt-4">
                  <Author {...item.author} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
