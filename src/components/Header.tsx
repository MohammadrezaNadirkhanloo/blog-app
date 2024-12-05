import CategoryList from "@/app/blogs/_components/CategoryList";
import Link from "next/link";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const user = false;
  return (
    <header className={`navbar bg-base-200 shadow-lg `}>
      <nav className="container ">
        <div className="flex-1">
          <h1 className="inline-block font-mono	">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-extrabold text-primary"
            >
              بلاگ‌ بایت
            </Link>
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <div className="flex items-center gap-x-10">
              <div className="lg:hidden">
                <div className="drawer">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle "
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer"
                      className="btn btn-primary drawer-button"
                    >
                      Open drawer
                    </label>
                  </div>
                  <div className="drawer-side z-20">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      {/* Sidebar content here */}
                      <CategoryList />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <li>
                  {user ? (
                    <NavLink
                      path="/profile"
                      classStyle="btn btn-active shadow-lg rounded-full px-5 lg:px-8 text-lg font-semibold"
                    >
                      پروفایل
                    </NavLink>
                  ) : (
                    <NavLink
                      path="/signin"
                      classStyle="btn btn-active shadow-lg rounded-full px-5 lg:px-8 text-lg font-semibold"
                    >
                      ورود / ثبت‌نام
                    </NavLink>
                  )}
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
