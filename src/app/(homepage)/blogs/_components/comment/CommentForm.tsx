"use client";
import createComment from "@/lib/actions";
import Button from "@/ui/Button";
import { useActionState, useEffect, startTransition } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

type CommentFormProps = {
  postId: string; // ID پست برای ارسال نظر
  parentId?: string; // ID نظر والد (اختیاری)
  onClose: () => void;
};

const initialState = {
  error: "",
  message: "",
};

function CommentForm({ postId, parentId, onClose }: CommentFormProps) {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, onClose]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        // استفاده از startTransition برای سازگاری بهتر با React
        startTransition(() => {
          formAction({ formData, postId, parentId });
        });
      }}
    >
      <textarea
        className="textarea textarea-primary w-full min-h-48"
        placeholder="نظر خود را وارد کنید ..."
        name="text"
        required
      ></textarea>
      <Button disabled={pending} variant="primary" className="mt-4">
        ارسال نظر
      </Button>
    </form>
  );
}

export default CommentForm;
