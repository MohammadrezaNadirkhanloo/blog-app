"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type CommentData = {
  postId: string;
  parentId: string | null;
  text: string;
};

type FormDataType = FormData;

type CreateCommentProps = {
  postId: string;
  parentId: string | null;
  formData: FormDataType;
};
export default async function createComment(
  prevState: any,
  { postId, parentId, formData }: CreateCommentProps
) {
  const rawFormData: CommentData = {
    postId,
    parentId,
    text: (formData.get("text") as string) || "", // استفاده از type assertion برای رفع ارور
  };

  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore); // تنظیم کوکی‌ها

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[postSlug]", "page");
    return {
      message,
    };
  } catch (err: any) {
    const error =
      err?.response?.data?.message || "مشکلی در ارسال نظر وجود داشت.";
    return {
      error,
    };
  }
}
