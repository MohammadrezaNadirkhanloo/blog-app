import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بلاگ  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>لیست بلاگ ها</h1>
      <div className="grid grid-cols-12">
        <div className="">منو</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
