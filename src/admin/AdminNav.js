import React from "react";
import "./AdminPanel.css";
import logo from "./Logo.png";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const AdminNav = ({ show }) => {
  return (
    <div>
      <div className={show ? "sidenav active" : "sidenav"}>
        <figure
          style={{
            borderBottom: "2px solid white",
            width: "155px",
            height: "71px",
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </figure>
        <ul className="mt-4">
          <li className="mb-4 ">
            <span id="upload">
              <FiUpload />
            </span>
            <Link
              to="/milapepaper/adminuploadsection"
              className="mt-2"
              style={{ marginLeft: "0.1rem" }}
            >
              Upload Section
            </Link>
          </li>
          <li className="mb-4">
            <span id="upload">
              <IoMdNotificationsOutline />
            </span>
            <Link to="/milapepaper/adminnotifications" className="mt-2">
              Notifications
            </Link>
          </li>
          <li className="mb-4">
            <span id="upload">
              <MdOutlineArticle />
            </span>

            <Link
              to="/milapepaper/admincurrentarticle"
              className="mt-2"
              style={{ marginLeft: "0.1rem" }}
            >
              Current Article{" "}
            </Link>
          </li>
          <li>
            <span id="upload">
              <FaUserFriends />
            </span>

            <Link
              to="/milapepaper/allusers"
              className="mt-2"
              style={{ marginLeft: "1.5rem" }}
            >
              {" "}
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
