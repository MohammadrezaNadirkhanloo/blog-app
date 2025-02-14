"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search({ full = false }: { full?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    const searchValue = searchInput.value;

    const newParams = new URLSearchParams(searchParams?.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <form
      className={`join w-full ${full ? "" : "lg:w-1/2"}`}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="input input-bordered border-e-0 join-item w-full focus:outline-none"
      />
      <button
        className="join-item rounded-r-full text-primary border border-gray-700 px-3"
        type="submit"
        aria-label="جستجو"
      >
        <IoSearch size={18} />
      </button>
    </form>
  );
}