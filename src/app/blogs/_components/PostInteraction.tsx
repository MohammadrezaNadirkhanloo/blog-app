"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

// import { bookmarkPostApi, likePostApi } from "@/services/postServices";
// import ButtonIcon from "@/ui/ButtonIcon";
// import { toPersianDigits } from "@/utils/numberFormatter";
import { Post } from "@/utils/types";

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
    <div className="flex items-center border-gray-500 border-t-2 rounded-b-2xl rounded-t-none">
      <ButtonIcon variant="secondary">
        <IoChatbubbleEllipsesOutline />
        <span>{toPersianDigits(commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        {isLiked ? <GoHeartFill /> : <GoHeart />}
      </ButtonIcon>
      <ButtonIcon variant="primary">
        {isBookmarked ? <FaBookmark /> : <CiBookmark />}
      </ButtonIcon>
    </div>
  );
}
export default PostInteraction;
