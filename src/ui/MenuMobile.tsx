"use clinet"

import NavLink from "@/components/NavLink";
import { getMenuItem } from "@/services/postService";
import { useEffect, useState } from "react";
type Category = {
  _id: string;
  title: string;
  slug: string;
  description: string;
};
const MenuMobile: React.FC = () => {
  const [categories, setcategories] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchData() {
      setcategories(await getMenuItem());
    }
    fetchData();
  }, []);

  return (
    <ul className="space-y-4 menu bg-base-200 rounded-box text-lg p-0">
      <li>
        <NavLink path="/blogs">همه</NavLink>
      </li>

      {categories.map((category: Category) => {
        return (
          <div
            key={category._id}
            className="tooltip "
            data-tip={category.description}
          >
            <li>
              <NavLink path={`/blogs/category/${category.slug}`}>
                {category.title}
              </NavLink>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
