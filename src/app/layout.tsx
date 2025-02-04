import vazirFont from "@/constants/localFonts";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلاگ بایت",
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
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <AuthProvider>
          <Toaster />
          <div className="">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
