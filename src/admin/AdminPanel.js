import React, { useState } from "react";
import AdminNav from "./AdminNav";
import AdminIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const AdminPanel = () => {
  return (
    <>
      <header
        style={{
          background: "#ffffff",
          height: "3.5rem",
          color: "#48a4f9",
          // padding: "20px",
        }}
      >
        <span
          className="mr-5"
          style={{ marginLeft: "3.3rem", fontSize: "2rem" }}
        >
          <GiHamburgerMenu />
        </span>
        <span className="ml-5" style={{ color: "black", fontSize: "1.5rem" }}>
          {" "}
          Admin Panel
        </span>
        <span
          className="mr-4"
          style={{ position: "absolute", right: "1rem", marginTop: "0.6rem" }}
        >
          <img src={AdminIcon} alt="icon" width={35} height={35} />

          <span>sky</span>
        </span>
      </header>
      <AdminNav />
    </>
  );
};

export default AdminPanel;
