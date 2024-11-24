import vazirFont from "@/constants/localFonts";
import type { Metadata } from "next";
import "@/styles/globals.css"


export const metadata: Metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلااگ اپ",
    default: "بلاگ اپ", // a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <body className={`${vazirFont.variable} font-sans min-h-screen `}>
      <div className="container xl:max-w-screen-xl"> {children}</div>
      </body>
    </html>
  );
}
