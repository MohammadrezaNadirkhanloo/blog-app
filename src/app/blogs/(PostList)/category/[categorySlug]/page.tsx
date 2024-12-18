import PostList from "@/app/blogs/_components/PostList";
import { getPosts } from "@/services/postService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const categorySlug = (await params).categorySlug;
  const query =
    queryString.stringify(await searchParams) +
    "&" +
    `categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options, query);

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
