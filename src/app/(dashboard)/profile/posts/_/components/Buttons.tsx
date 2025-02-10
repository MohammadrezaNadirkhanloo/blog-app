"use client";

import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import Link from "next/link";

export function DeletePost({ id }: { id: string | undefined }) {
  return (
    <>
      <button className="text-error" onClick={() => console.log(id)}>
        <MdDelete size={25} />
      </button>
    </>
  );
}
export function UpdatePost({ id }: { id: string | undefined }) {
  return (
    <>
      <Link href={`/profile/posts/${id}/edit`}>
        <button className="text-primary">
          <BiSolidEditAlt size={25} />
        </button>
      </Link>
    </>
  );
}
