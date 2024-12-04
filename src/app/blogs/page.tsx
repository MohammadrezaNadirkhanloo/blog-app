import { Suspense } from "react";
import PostList from "./_components/PostList";
import Loading from "./loading";

async function BlogPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </>
  );
}

export default BlogPage;
