"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  children: string;
}

function NavLink({ path, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary" : ""}
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
