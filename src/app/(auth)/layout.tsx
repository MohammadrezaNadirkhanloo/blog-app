import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-12 bg-base-200 shadow-xl rounded-lg">
        {children}
      </div>
    </div>
  );
}
