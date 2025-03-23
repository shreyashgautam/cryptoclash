import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

function MainLayout() {
  const [openSideBar, SetOpenSideBar] = useState(false);
  
  return (
    <div className="flex min-h-screen w-full bg-black text-green-300">
      <AdminSidebar open={openSideBar} setOpen={SetOpenSideBar} />
      <div className="flex flex-1 flex-col">
        {/* Admin Header */}
        <AdminHeader setOpen={SetOpenSideBar} />
        <main className="flex-1 bg-[#1A1A1A] p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
