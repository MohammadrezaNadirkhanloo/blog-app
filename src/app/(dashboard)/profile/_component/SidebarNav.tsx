"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChatDotsFill, BsFilePostFill } from "react-icons/bs";
import { HiMiniSquares2X2, HiUsers } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <TbLayoutDashboardFilled className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <BsFilePostFill className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <BsChatDotsFill className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <HiMiniSquares2X2 className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <HiUsers className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 font-medium hover:text-primary transition-all duration-200 py-3 px-4 ",
                {
                  "bg-base-300 !font-bold text-primary [clip-path:polygon(20px_0%,100%_0%,100%_100%,20px_100%,0%_50%)]":
                    pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
