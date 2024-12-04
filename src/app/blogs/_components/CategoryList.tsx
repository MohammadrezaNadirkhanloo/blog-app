import Link from "next/link";

async function CategoryList() {
    await new Promise((res) => setTimeout(() => res(), 4000));

  type Category = { _id: string; title: string; slug: string };
  type CategoriesResponse = { data: { categories: Category[] } };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  }: CategoriesResponse = await res.json();

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((category: Category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryList;
