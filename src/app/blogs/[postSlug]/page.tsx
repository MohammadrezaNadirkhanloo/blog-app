import { getPostBySlug } from "@/services/postService";
import Image from "next/image";
import NotFound from "./not-found";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const post = await getPostBySlug((await params).postSlug);
  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const post = await getPostBySlug((await params).postSlug);
  if (!post) {
    return <NotFound />;
  }
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          alt="post image"
          src={post.coverImageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} /> */}
    </div>
  );
}

export default SinglePost;
