import { Post } from "@/utils/types";

interface Postsingel {
  title: string;
  briefText: string;
  text: string;
  coverImageUrl: string;
  related: [];
}

interface PostResponse {
  data: { post: Postsingel };
}

interface PostsResponse {
  data: { posts: Post[] };
}
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data }: PostResponse = await res.json();
  const post = data?.post || null;

  return post;
}

export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { data }: PostsResponse = await res.json();
  const posts = data?.posts || null;

  return posts;
}

export async function getMenuItem() {
  type Category = {
    _id: string;
    title: string;
    slug: string;
    description: string;
  };
  type CategoriesResponse = { data: { categories: Category[] } };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, {
    cache: "force-cache",
  });
  const {
    data: { categories },
  }: CategoriesResponse = await res.json();

  return categories;
}
