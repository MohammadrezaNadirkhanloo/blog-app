import PostList from "@/app/blogs/_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { Post } from "@/utils/types";
import { cookies } from "next/headers";

interface PostsResponse {
  data: { posts: Post[] };
}

async function Category({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categorySlug = (await params).categorySlug;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`,
    options
  );
  const { data }: PostsResponse = await res.json();
  const posts = data?.posts || null;

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">{`پستی در این دسته بندی یافت نشد`}</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
