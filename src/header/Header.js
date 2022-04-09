import React from "react";
import logo from "../Logo.png";
import "./header.css";

const Header = ({ page }) => {
  console.log(page + 1);
  return (
    <div className="container-fluid ml-3 mr-5 mt-1">
      <div className="row mr-3" style={{ borderBottom: "9px solid #A30202" }}>
        <div
          className="col-md-3 text-center  head"
          style={{ paddingRight: "12rem" }}
        >
          {/* {page + 1} */}2
        </div>
        <div className="col-md-5 pl-3 pt-2">
          {" "}
          <figure className="" style={{ paddingLeft: "9rem" }}>
            <img src={logo} alt="header_logo" width="250px" height="50px" />
          </figure>
        </div>
        <div className="col-md-4 pt-2 " style={{ paddingLeft: "8rem" }}>
          <span className="headdd">Thursday, 21 November , 2021</span>
          <br />
          <span className="h pl-3">The Daily New Milap, New Delhi</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
