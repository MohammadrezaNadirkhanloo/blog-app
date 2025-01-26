"use client";
import Button from "@/ui/Button";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState, useRef } from "react";
import classNames from "classnames";
import Comment from "./Comment";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import CommentForm from "./CommentForm";

type UserType = {
  _id: string;
  name: string;
  avatar?: string;
  avatarUrl?: string;
};

type CommentType = {
  _id: string;
  user: UserType;
  answers: CommentType[];
  text?: string; // برای متن نظر (اگر نیاز دارید)
};

function PostComment({ post: { comments, _id: postId } }: any) {
  const [parent, setParent] = useState<CommentType | null>(null);
  const { user } = useAuth();
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  // باز کردن مودال
  const openModal = (parentComment: CommentType | null) => {
    if (!user) {
      router.push("/signin");
      return;
    }
    setParent(parentComment);
    modalRef.current?.showModal();
  };

  // بستن مودال
  const closeModal = () => {
    modalRef.current?.close();
    setParent(null);
  };

  return (
    <div className="mb-10">
      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute left-2 top-4"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">
            {parent ? "پاسخ به نظر" : "ثبت نظر جدید"}
          </h3>
          <p className="text-sm mt-1">
            {parent ? `پاسخ به: ${parent.user.name}` : "نظر خود را وارد کنید"}
          </p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <CommentForm
            onClose={closeModal}
            parentId={parent ? parent._id : null}
            postId={postId}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>بستن</button>
        </form>
      </dialog>

      {/* Comments Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          onClick={() => openModal(null)}
          variant="primary"
          className="flex items-center py-2"
        >
          <FaRegCircleQuestion size={20} />
          <span>ثبت نظر جدید</span>
        </Button>
      </div>

      {/* Comments List */}
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="border dark:border-gray-500 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment
                    comment={comment}
                    onAddComment={() => openModal(comment)}
                  />
                </div>
                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={classNames(
                            "answer-item border dark:border-gray-500 rounded-xl p-2 sm:p-4",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment comment={item} key={item._id} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </div>
  );
}

export default PostComment;
