"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  children: string;
  classStyle?: string;
}

function NavLink({ path, children, classStyle }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary" : ""}
        ${classStyle}
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
