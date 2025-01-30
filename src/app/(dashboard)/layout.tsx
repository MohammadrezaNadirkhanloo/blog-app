import Header from "./profile/_component/Header";
import SideBar from "./profile/_component/Sidebar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 h-screen">
          <aside className="col-span-12  xl:col-span-2 hidden xl:block">
            <SideBar />
          </aside>
          <div className="col-span-12 xl:col-span-10 h-screen flex flex-col">
            <Header />
            <main className="bg-base-300 xl:rounded-tr-3xl py-4 md:py-6 lg:p-10 flex-1 overflow-y-auto">
              <div className="container">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
