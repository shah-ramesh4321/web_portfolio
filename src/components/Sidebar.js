import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="menu-icon">
          <img src="/images/menu.svg" alt="" />
        </div>

        <div className="sidebar-icons">
          <img src="/images/business-man.svg" alt="" />
          <img src="/images/call.svg" alt="" />
          <img src="/images/edit.svg" alt="" />
          <img src="/images/portfolio.svg" alt="" />
          <img src="/images/eye-glass.svg" alt="" />
        </div>
        <div className="sidebar-download-icon">
          <img src="/images/cloud-download.svg" alt="" />
        </div>
      </div>
    </>
  );
};
