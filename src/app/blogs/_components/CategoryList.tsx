import NavLink from "@/components/NavLink";

async function CategoryList() {
  type Category = {
    _id: string;
    title: string;
    slug: string;
    description: string;
  };
  type CategoriesResponse = { data: { categories: Category[] } };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, {
    cache: "force-cache",
  });
  const {
    data: { categories },
  }: CategoriesResponse = await res.json();

  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow shadow-md bg-base-200 "
    >
      <input type="checkbox" />
      <div className="collapse-title font-medium">دسته بندی مقالات</div>
      <div className="collapse-content">
        <ul className="space-y-4 menu text-lg ">
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
        </ul>{" "}
      </div>
    </div>
  );
}
export default CategoryList;
