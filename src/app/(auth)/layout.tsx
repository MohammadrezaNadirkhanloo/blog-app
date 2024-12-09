import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
}
