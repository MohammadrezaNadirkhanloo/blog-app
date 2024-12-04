"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
// import { bookmarkPostApi, likePostApi } from "@/services/postServices";
// import ButtonIcon from "@/ui/ButtonIcon";
// import { toPersianDigits } from "@/utils/numberFormatter";
import { Post } from "@/utils/types";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";
// import { useRouter } from "next/navigation";

// import toast from "react-hot-toast";

function PostInteraction({ commentsCount, _id, isLiked, isBookmarked }: Post) {
  
  // const router = useRouter();

  // const likeHandler = async (postId) => {
  //   try {
  //     const { message } = await likePostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  // const bookmarkHandler = async (postId) => {
  //   try {
  //     const { message } = await bookmarkPostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" >
        {isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" >
        {isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}
export default PostInteraction;
