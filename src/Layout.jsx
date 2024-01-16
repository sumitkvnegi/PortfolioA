// Layout.js

import React from "react";
import SideBar from "./components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-one text-white">
      {/* Sidebar */}
      <div className="bg-gradient-to-t from-one via-two to-one border-4 rounded-2xl border-[#121424] px-2 py-6 my-4 mx-4 shadow-sm relative">
        <SideBar />
      </div>
      {/* Main Content */}
      <div className="w-full bg-one py-6 mr-4">
        <main className="flex flex-col gap-8 overflow-y-scroll h-full custom-scrollbar px-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
