import { getPosts } from "@/services/postService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import queryString from "query-string";

async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(options, query);

  const { search } = await searchParams;
  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;
