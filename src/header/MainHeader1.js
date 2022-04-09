import React from "react";
import logo from "../Logo.png";
// import "./MainHeader.css";
import "../index.css";
import { Link } from "react-router-dom";
import UserIcon from "../assests/Icons-Web and Admin/Profile 1x.png";

const MainHeader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3  bg-danger ">
            THE DAILY MILAP
          </div>
          <div className="col-8 col-sm-8 col-md-8 col-lg-8 bg-success">
            <img src={logo} alt="header_logo" width="100%" height="100%" />
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 bg-warning er">
            {" "}
            <div className="">
              {/* <Link to="/milapepaper/usersignup"> */}
              <img
                src={UserIcon}
                alt="register"
                width="100"
                height="100"
                title="Register"
              />{" "}
              {/* </Link> */}
            </div>
            {/* <div
              className=""
              // style={{ fontSize: "14px" }}
              // style={{
              //   fontFamily: "Crimson text",
              // }}
            >
              Register
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
