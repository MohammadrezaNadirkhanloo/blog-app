"use client";

import Link from "next/link";
import SideBarNavs from "./SidebarNav";

function SideBar() {
  //   const { logout } = useAuth();

  //   const logoutHandler = async () => {
  //     await logout;
  //   };

  return (
    <div className="overflow-y-auto flex flex-col h-screen pt-5">
      {/* Drawer header */}
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-2xl font-mono
         mb-6 font-extrabold text-primary"
      >
        بلاگ‌ بایت
      </Link>
      {/* Drawer content */}
      <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="overflow-y-auto flex-auto ps-4">
        <SideBarNavs />
        {/* <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div> */}
      </div>
    </div>
  );
}
export default SideBar;
