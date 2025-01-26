import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import { HiMiniArrowUturnRight } from "react-icons/hi2";

type UserType = {
  avatarUrl: string;
  name: string;
};

type ContentType = {
  text: string;
};

type CommentType = {
  user: UserType;
  createdAt: string;
  openToComment: boolean;
  content: ContentType;
};

type CommentProps = {
  comment: CommentType;
  onAddComment?: () => void;
};

function Comment({ comment, onAddComment }: CommentProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-5 border-b border-b-secondary-200/60 pb-2">
        <div className="flex items-center gap-x-3">
          <Avatar width={34} src={comment.user.avatarUrl} alt="usercomment" />
          <div className="text-sm w-full text-secondary-600">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block text-secondary-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
              onClick={onAddComment}
              variant="neutral"
              className="text-sm flex gap-x-2 px-3 rounded-lg"
            >
              <span className="ml-1">
                <HiMiniArrowUturnRight />
              </span>
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className="text-secondary-700 leading-loose lg:leading-8 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
}

export default Comment;
