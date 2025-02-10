"use server";

import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllComments } from "./commentService";
import { getPosts } from "./postService";

export default async function fetchDataCardDashboard() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getPosts(),
      getAllComments(options),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error: unknown) {
    console.error("❌ خطا در پردازش داده‌ها:", error);
    // throw new Error("⚠️ خطا در بارگذاری اطلاعات");
  }
}
