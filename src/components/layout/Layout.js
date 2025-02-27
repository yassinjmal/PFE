// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import ChatSidebar from "../ChatSidebar";
import ChatHeader from "../ChatHeader";
import "./Layout.css";

function Layout({ darkMode }) {
  return (
    <div className={darkMode ? "layout-container dark-mode" : "layout-container"}>
      <ChatSidebar />
      <div className="layout-main">
        <ChatHeader />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
