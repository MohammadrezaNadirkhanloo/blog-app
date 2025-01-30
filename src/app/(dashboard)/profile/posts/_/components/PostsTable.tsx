import { getPosts } from "@/services/postService";
import Table from "@/ui/Tabel";
import PostRow from "./PostRow";

export default async function PostsTable() {
  const posts = await getPosts();

  if (!posts.length) return <p>پست نی</p>;
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
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
