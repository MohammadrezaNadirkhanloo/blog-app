"use client";

import { useAuth } from "@/context/AuthContext";
import MenuMobile from "@/ui/MenuMobile";
import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`navbar bg-base-300  shadow-lg transition-all duration-200 relative z-50 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container ">
        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <div className="lg:hidden">
              <div className="drawer ">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle "
                />
                <div className="drawer-content">
                  {/* Page content here */}
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
                    {/* Sidebar content here */}
                    <div className="flex-1">
                      <li className="items-end">
                        <label
                          htmlFor="my-drawer"
                          aria-label="close sidebar"
                          className=" drawer-overlay "
                        >
                          <IoCloseSharp size={20} />
                        </label>
                      </li>
                      <MenuMobile />
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
            <h1 className="inline-block font-mono	">
              <Link
                href="/"
                className="text-2xl lg:text-3xl font-extrabold text-primary"
              >
                بلاگ‌ بایت
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <div className="flex items-center gap-x-10">
              <div className="lg:hidden">
                {user ? (
                  <NavLink
                    path="/profile"
                    classStyle="btn btn-active shadow-lg rounded-full px-5 lg:px-8 text-lg font-semibold"
                  >
                    پروفایل
                  </NavLink>
                ) : (
                  <Link
                    href="/signin"
                    className="btn btn-neutral bg-base-100 shadow-lg rounded-full hover:text-primary text-lg "
                  >
                    <FaRegUser />
                  </Link>
                )}
              </div>
              <div className="hidden lg:block">
                {user ? (
                  <NavLink
                    path="/profile"
                    classStyle="btn btn-active shadow-lg rounded-full px-5 lg:px-8 text-lg font-semibold"
                  >
                    پروفایل
                  </NavLink>
                ) : (
                  <div className="flex items-center rounded-full bg-base-100 shadow-lg p-px hover:bg-base-100">
                    <Link
                      href="/signin"
                      className="bg-base-300 px-6 py-1 rounded-full hover:text-primary text-lg"
                    >
                      ورود
                    </Link>
                    <Link
                      href="/signup"
                      className="px-3 py-1 hover:text-primary text-lg"
                    >
                      ثبت‌نام
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
