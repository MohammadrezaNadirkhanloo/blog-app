import NavLink from "@/components/NavLink";

async function CategoryList() {
  type Category = {
    _id: string;
    title: string;
    slug: string;
    description: string;
  };
  type CategoriesResponse = { data: { categories: Category[] } };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  }: CategoriesResponse = await res.json();

  return (
    <ul className="space-y-4 menu bg-base-200 rounded-box text-lg sticky top-2">
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
}
export default CategoryList;
