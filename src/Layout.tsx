import React from "react";
import Menu from "./components/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Menu />

      <div className="flex-1">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
