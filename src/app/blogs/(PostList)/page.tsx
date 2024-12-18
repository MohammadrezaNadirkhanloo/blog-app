import { getPosts } from "@/services/postService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";

async function BlogPage() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;
