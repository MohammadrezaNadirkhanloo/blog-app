import { Suspense } from "react";
import PostList from "./_components/PostList";
import Loading from "./loading";

async function BlogPage() {
  return (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        distinctio natus voluptatibus, dolore necessitatibus voluptatem
        obcaecati maxime molestias quos dicta veritatis fugiat voluptate
        ratione, ullam eius voluptatum corporis saepe libero.
      </p>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </>
  );
}

export default BlogPage;
