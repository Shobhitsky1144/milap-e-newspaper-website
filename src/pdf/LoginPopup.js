import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import mail from "../assests/Icon-UI/Mail.png";
import CityIcon from "../assests/Icon-UI/City 1x.png";
import StateIcon from "../assests/Icon-UI/State 1x.png";
import PasswordIcon from "../assests/Icon-UI/Password.png";
import "./LoginPopup.css";
import GoogleIcon from "../assests/Icon-UI/Logo Google 1x.png";
import FacebookIcon from "../assests/Icon-UI/Facebook 1x.png";
import NameIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
import CountryIcon from "../assests/Icon-UI/country.png";

import Axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const LoginPopup = ({ openn, setPopupp, LoginUser }) => {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const LoginData = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      LoginUser(email, password);
    } else {
      // alert("Email, Name or Password can't be empty");
      toast.error("Please fill all the fields");
    }
  };

  return (
    <Dialog open={openn}>
      <div
        className=" login popup pt-2"
        style={{
          height: "290px",
          overflow: "hidden",
          width: "400px",
          background: "linear-gradient(rgb(146, 216, 255), rgb(72, 164, 249))",
        }}
      >
        <section className="login">
          <div className="container d-flex justify-content-center ">
            <div className="signup-content">
              <div className="login-from ">
                <div className="text-center ">
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4
                      style={{ position: "relative", left: "154px" }}
                      className="form-title pt- "
                    >
                      Login
                    </h4>
                    <div
                      style={{
                        position: "relative",
                        top: "2px",
                        right: "-17px",
                      }}
                    >
                      <CloseIcon
                        onClick={() => setPopupp(false)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className=" mb-1 ">
                    <button
                      type="submit"
                      className=" btn  text-white text-center mr-4"
                      style={{
                        background: "rgb(66, 103, 178)",
                        padding: "0.3rem",
                        borderRadius: " 1rem",
                        width: "10rem",
                      }}
                    >
                      <span className="pr-2">
                        <img
                          src={FacebookIcon}
                          alt="facebook"
                          height={21}
                          width={22}
                          style={{ backgroundColor: "white" }}
                        />
                      </span>
                      <span style={{ fontSize: "14px" }}>Facebook</span>
                    </button>

                    <button
                      type="submit"
                      className=" btn  text-center"
                      style={{
                        backgroundColor: "#E1E1E1",
                        color: "black",
                        padding: "0.3rem",
                        borderRadius: " 1rem",
                        width: "10rem",
                        // marginLeft: "52px",
                      }}
                    >
                      <span className="pr-2">
                        <img
                          src={GoogleIcon}
                          alt="google"
                          height={16}
                          width={16}
                        />
                      </span>
                      <span style={{ fontSize: "14px" }}>Google</span>
                    </button>
                  </div>
                </div>

                <form method="POST " className="">
                  <div className="form-group ">
                    <label htmlFor="email">
                      <h6 className="" style={{ fontSize: "14px" }}>
                        Email Id
                      </h6>
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      required="true"
                      id="emailidd"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email id"
                      style={{ paddingRight: "3rem" }}
                    />

                    <figure id="figuree" style={{}}>
                      <img src={mail} height="22px" width="25px" alt="figure" />
                    </figure>
                  </div>
                  <div className="form-group" style={{ marginTop: "-2.5rem" }}>
                    <label htmlFor="password">
                      <h6 style={{ fontSize: "14px" }}> Password </h6>
                    </label>
                    <br />
                    <input
                      type={passwordVisibility ? "text" : "password"}
                      // type="password"
                      name="password"
                      id="passwordd"
                      required="true"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      style={{ paddingRight: "3rem" }}
                    />
                    <figure
                      className=""
                      id="figuree"
                      onClick={() => {
                        if (passwordVisibility) {
                          setPasswordVisibility(false);
                        } else {
                          setPasswordVisibility(true);
                        }
                      }}
                    >
                      <img
                        src={PasswordIcon}
                        alt="figure"
                        height="22px"
                        width="25px"
                      />
                    </figure>
                  </div>

                  <div
                    className="d-flex  "
                    style={{
                      marginTop: "-2rem",
                      fontSize: "15px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="form-group  ">
                      <button
                        type="submit"
                        className=" btn  text-white text-center"
                        style={{
                          // backgroundColor: "#4997DE",
                          backgroundColor: "#0094DE",
                          // background: "rgb(66, 103, 178)",
                          padding: "5px 10px",
                          borderRadius: " 20px",
                          width: "10rem",
                        }}
                        onClick={LoginData}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  {/* <div
                    className=""
                    style={{ marginTop: "-0.9rem", height: "2rem" }}
                  >
                    <span
                      className="pl-5 ml-4"
                      style={{
                        color: "#565862",
                        fontSize: "14px",
                      }}
                    >
                      Already have an account?{" "}
                    </span>
                    <NavLink
                      style={{
                        color: "#4997DE",
                        // marginLeft: "3.7rem",
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                      to="/userlogin"
                    >
                      Sign in
                    </NavLink>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ) : (
        ""
      )} */}
    </Dialog>
  );
};

export default LoginPopup;
