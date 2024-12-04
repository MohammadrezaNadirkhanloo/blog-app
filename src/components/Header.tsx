import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const user = false;
  return (
    <header className={`navbar bg-base-200 shadow-lg `}>
      <nav className="container ">
        <div className="flex-1">
          <Link
            href="/"
            className="text-2xl font-bold text-primary flex items-center gap-x-2"
          >
            <Image
              src="/images/logoPage.png"
              alt="logo"
              width={30}
              height={30}
            />
            <strong>ByteBlog</strong>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <div className="flex items-center gap-x-10">
              <li>
                {user ? (
                  <NavLink path="/profile" classStyle="text-lg font-semibold">
                    Profile
                  </NavLink>
                ) : (
                  <NavLink path="/signin" classStyle="text-lg font-semibold">
                    Login
                  </NavLink>
                )}
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
