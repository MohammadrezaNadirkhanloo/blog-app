import Spinner from "@/components/Spinner";
import type { Metadata } from "next";
import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";

export const metadata: Metadata = {
  title: "بلاگ  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-4 xl:gap-x-6 ">
        <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-10 xl:col-span-10">
          {children}
        </div>
      </div>
    </div>
  );
}
