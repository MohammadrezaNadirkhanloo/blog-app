interface Post {
  title: string;
  briefText: string;
  text: string;
  coverImageUrl: string;
  related: [];
}

interface PostResponse {
  data: { post: Post };
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data }: PostResponse = await res.json();
  const post = data?.post || null;

  return post;
}
