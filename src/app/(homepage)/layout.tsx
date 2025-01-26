import Header from "@/components/Header";

export const metadata = {
  title: "بلاگ بایت",
  description: "بلاگ بایت",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="container mt-14">{children}</div>
    </>
  );
}
