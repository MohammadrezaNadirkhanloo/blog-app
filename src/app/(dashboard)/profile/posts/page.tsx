import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Spinner from "@/components/Spinner";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

function Posts({ searchParams }: { searchParams: Record<string, string> }) {
  const query: string = queryString.stringify(searchParams);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-secondary-700 font-bold text-xl">لیست پست ها</h1>
        <Search full={true} />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
    </div>
  );
}

export default Posts;
