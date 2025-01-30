import Table from "@/ui/Tabel";
import { toLocalDateShort } from "@/utils/toLocalDateShort";
import truncateText from "@/utils/trancateText";

interface Author {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
}

interface Category {
  _id: string | undefined;
  title: string | undefined;
  slug: string | undefined;
}

interface Post {
  _id?: string;
  id?: string;
  title?: string;
  briefText?: string;
  text?: string;
  category?: Category | undefined;
  author?: Author | undefined;
  comments?: object[]; // یا تعریف دقیق‌تر برای آرایه نظرات
  commentsCount?: number;
  coverImage?: string;
  coverImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  likesCount?: number;
  readingTime?: string;
  related?: object[]; // یا تعریف دقیق‌تر
  slug?: string;
  tags?: string[];
  type?: "free" | "premium";
  __v?: number;
}

const statusStyle = {
  free: {
    label: "رایگان",
    className: "badge-success",
  },
  premium: {
    label: "پولی",
    className: "badge-info",
  },
};

interface PostRowProps {
  post: Post; // نوع مشخص برای `post`
  index: number; // اندیس
}

function PostRow({ post, index }: PostRowProps) {
  const { title, category, author, createdAt, type } = post;
  const status =
    type && statusStyle[type]
      ? statusStyle[type]
      : { label: "نامشخص", className: "badge-default" };

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title ?? ".", 30)}</td>
      <td>{category?.title}</td>
      <td>{author?.name}</td>
      <td>{toLocalDateShort(createdAt ?? "")}</td>
      <td>
        <span className={`badge ${status.className}`}>{status.label}</span>
      </td>
      <td>
        ...
        {/* <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePost id={post._id} postTitle={post.title} />
        </div> */}
      </td>
    </Table.Row>
  );
}

export default PostRow;
