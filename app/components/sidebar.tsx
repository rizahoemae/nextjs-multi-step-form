import React from "react";
import SidebarDesktop from "@/public/sidebar-desktop.svg";
import Image from "next/image";
export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="relative border">
        <Image src={SidebarDesktop} alt="" className="" />
        <div className="absolute top-0 h-full w-full">{children}</div>
      </aside>
    </>
  );
}
