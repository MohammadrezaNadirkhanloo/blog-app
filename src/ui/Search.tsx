"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const search = e.target.search;
    const searchValue = search.value;

    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    // console.log(search.value);
    // router.push(createUrl("/search", newParams));
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });

    // router.push(pathname + "?" + newParams.toString());
  }

  return (
    <form className="join w-full lg:w-1/2" onSubmit={onSubmit}>
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
      >
        <IoSearch size={18} />
      </button>
    </form>
  );
}
