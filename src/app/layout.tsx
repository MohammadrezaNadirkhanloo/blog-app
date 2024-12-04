import vazirFont from "@/constants/localFonts";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلااگ بایت",
    default: "بلاگ بایت", // a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <body className={`${vazirFont.variable} font-sans min-h-screen `}>
        <div dir="ltr">
          <Header />
        </div>
        <div className=""> {children}</div>
      </body>
    </html>
  );
}
