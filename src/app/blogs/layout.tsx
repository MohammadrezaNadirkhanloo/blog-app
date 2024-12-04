import type { Metadata } from "next";
import CategoryList from "./_components/CategoryList";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

export const metadata: Metadata = {
  title: "بلاگ  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
}
