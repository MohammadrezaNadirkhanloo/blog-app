"use client";
// import useMoveBack from "@/hooks/useMoveBack";

import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

function NotFound() {
  //   const moveBack = useMoveBack();
  const route = useRouter();
  return (
    <section className="flex items-center  p-16">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            {" "}
            صفحه ای که دنبالش بودید، پیدا نشد. 
          </p>
          <Button variant="primary" onClick={() => route.back()}>
            برگشت
          </Button>
        </div>
      </div>
    </section>
  );
}
export default NotFound;
