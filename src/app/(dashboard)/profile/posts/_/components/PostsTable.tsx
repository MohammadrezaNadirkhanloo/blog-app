import { getPosts } from "@/services/postService";
import Table from "@/ui/Tabel";
import PostRow, { Post } from "./PostRow";

export default async function PostsTable({ query = "" }: { query?: string }) {
  const { posts } = await getPosts(query);

  if (!posts.length) return <p>پستی یافت نشد</p>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post: Post, index: number) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
