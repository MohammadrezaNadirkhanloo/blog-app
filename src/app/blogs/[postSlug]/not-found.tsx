import Button from "@/ui/Button";
import Link from "next/link";

function NotFound() {
  return (
    <section className="flex items-center  p-16">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl  dark:text-gray-300">
            {" "}
            هیچ پستی با این مشخصات یافت نشد.
          </p>
          <Link href="/blogs">
            <Button variant="primary">رفتن به صفحه پست ها</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NotFound;
