"use client";

import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

export function DeletePost({ id }: { id: string | undefined }) {
  return (
    <>
      <button
        className="text-error btn btn-circle btn-ghost"
        onClick={() => console.log(id)}
      >
        <MdDelete size={25} />
      </button>
    </>
  );
}
export function UpdatePost({ id }: { id: string | undefined }) {
  return (
    <>
      <Link href={`/profile/posts/${id}/edit`}>
        <button className="text-primary btn btn-circle btn-ghost">
          <TbEdit size={25} />
        </button>
      </Link>
    </>
  );
}
export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg btn btn-primary px-4 text-sm font-medium"
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <FiPlusCircle size={20} />
    </Link>
  );
}
