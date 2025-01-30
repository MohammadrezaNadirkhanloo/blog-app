"use client";

import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import SideBarNavs from "./SidebarNav";

const Header = () => {
  const { user, isLoading } = useAuth();
  // const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <header className={`bg-g ${isLoading ? "bg-opacity-30 blur-md" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between py-4 px-4 lg:px-8">
          <div className="flex items-center gap-x-3">
            <div className="xl:hidden">
              <div className="drawer ">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle "
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-ghost"
                  >
                    <CgMenuRightAlt size={25} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay "
                  ></label>

                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <div className="flex-1">
                      <li className="flex flex-row items-center justify-between mb-5">
                        <Link
                          href="/"
                          className=" text-2xl font-mono font-extrabold text-primary "
                        >
                          بلاگ‌ بایت
                        </Link>
                        <label
                          htmlFor="my-drawer"
                          aria-label="close sidebar"
                          className=" drawer-overlay "
                        >
                          <IoCloseSharp size={20} />
                        </label>
                      </li>
                      <SideBarNavs />
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="flex items-center justify-between ">
                      <div className={` flex items-center gap-x-3`}>
                        <BsMoonStars className="w-5 h-5" />
                        <p className="text-lg font-medium truncate ">
                          حالت تاریک
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        // checked={isDarkMode}
                        className={`toggle theme-controller col-span-2 col-start-1 row-start-1 checked:border-blue-800 checked:bg-blue-700 checked:[--tglbg:theme(colors.primary)]`}
                        // onChange={toggleDarkMode}
                      />{" "}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
              <span className="text-sm lg:text-lg font-bold text-secondary-700 hidden lg:block">
                سلام؛ {user?.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Link href="/profile">
              <div
                color="outline"
                className={`border-secondaray-200 rounded-2xl flex cursor-pointer items-center`}
              >
                <Avatar alt="avatar" src={user?.avatarUrl || ""} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
