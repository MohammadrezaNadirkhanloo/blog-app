"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  children: string;
  classStyle?: string;
}

const NavLink: React.FC<Props> = ({ path, children, classStyle }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary bg-base-100" : ""}
        ${classStyle}
      `}
      href={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
