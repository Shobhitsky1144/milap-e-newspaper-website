import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import mail from "../assests/Icon-UI/Mail.png";
import CityIcon from "../assests/Icon-UI/City 1x.png";
import StateIcon from "../assests/Icon-UI/State 1x.png";
import PasswordIcon from "../assests/Icon-UI/Password.png";
import "./SubscribePopup.css";
import GoogleIcon from "../assests/Icon-UI/Logo Google 1x.png";
import FacebookIcon from "../assests/Icon-UI/Facebook 1x.png";
import NameIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
import CountryIcon from "../assests/Icon-UI/country.png";

import Axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { signInWithGoogle } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

toast.configure();

const SubscribePopup = ({ open, setPopup, SubscribeUser }) => {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyBddzF1IprxaGpzURkXwHsYIzejiSuVMQg",
    authDomain: "milap-50a56.firebaseapp.com",
    projectId: "milap-50a56",
    storageBucket: "milap-50a56.appspot.com",
    messagingSenderId: "919264125417",
    appId: "1:919264125417:web:ffc1e0aed5a3b3ed5bab78",
  });
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log("firebase", res.user);
        console.log("firebase", res.user.displayName);
        console.log("firebase", res.user.photoURL);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const PostData = (e) => {
    e.preventDefault();
    if (
      email !== "" &&
      firstName !== "" &&
      password !== "" &&
      country !== "" &&
      state !== "" &&
      city !== ""
    ) {
      SubscribeUser(firstName, lastName, email, state, city, country, password);
    } else {
      // alert("Email, Name or Password can't be empty");
      toast.error("Please fill all the fields");
    }
  };

  return (
    <Dialog open={open}>
      <div
        className=" subscribe-popup "
        style={{
          height: "505px",
          overflow: "hidden",
          width: "400px",
          background: "linear-gradient(rgb(146, 216, 255), rgb(72, 164, 249))",
        }}
      >
        <section className="sign-up">
          <div className="container d-flex justify-content-center ">
            <div className="signup-content">
              <div className="signup-formm  ">
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
                      className="form-title pt-3 "
                    >
                      Subscribe
                    </h4>
                    <div
                      style={{
                        position: "relative",
                        top: "13px",
                        right: "21px",
                      }}
                    >
                      <CloseIcon
                        onClick={() => setPopup(false)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className=" mb-1">
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
                      onClick={signInWithGoogle}
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

                <form method="POST " className="ml-5">
                  <div
                    className="form-group "
                    // style={{ marginTop: "-1.9rem" }}
                  >
                    <label htmlFor="fullname">
                      <h6 className="" style={{ fontSize: "14px" }}>
                        Name
                      </h6>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="fullname"
                      required="true"
                      id="full"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your name"
                      style={{ paddingRight: "3rem" }}
                    />
                    <div>
                      <figure id="figure" style={{}}>
                        <img
                          src={NameIcon}
                          height="25px"
                          width="26px"
                          alt="figure"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="form-group " style={{ marginTop: "-2.7rem" }}>
                    <label htmlFor="email">
                      <h6 className="pt-2" style={{ fontSize: "14px" }}>
                        Email Id
                      </h6>
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      required="true"
                      id="emailid"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email id"
                      style={{ paddingRight: "3rem" }}
                    />

                    <figure id="figure" style={{}}>
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
                      id="password"
                      required="true"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      style={{ paddingRight: "3rem" }}
                    />
                    <figure
                      className=""
                      id="figure"
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
                  <div className="form-group" style={{ marginTop: "-2.5rem" }}>
                    <label htmlFor="country">
                      <h6 style={{ fontSize: "14px" }}>Country</h6>
                    </label>
                    <br />
                    <input
                      name="text"
                      id="country"
                      required="true"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter your country"
                      style={{ paddingRight: "3rem" }}
                    />
                    <figure id="figure">
                      <img
                        src={CountryIcon}
                        alt="figure"
                        height="20px"
                        width="23px"
                      />
                    </figure>
                  </div>
                  <div className="d-flex">
                    <div style={{ marginTop: "-2.5rem", width: "47%" }}>
                      <div className="form-group ">
                        <label htmlFor="state">
                          <h6 className="" style={{ fontSize: "14px" }}>
                            State
                          </h6>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="state"
                          required="true"
                          id="statee"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Enter your state"
                          style={{ paddingRight: "2rem" }}
                        />
                        <figure
                          id="figure"
                          style={{ marginLeft: "-10.5rem", width: "10px" }}
                        >
                          <img
                            src={StateIcon}
                            height="19px"
                            width="17px"
                            alt="figure"
                          />
                        </figure>
                      </div>
                    </div>

                    <div
                      //   className="col-md-6 "
                      style={{ marginTop: "-2.5rem" }}
                    >
                      <div className="form-group ">
                        <label htmlFor="state">
                          <h6 className="" style={{ fontSize: "14px" }}>
                            City
                          </h6>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="city"
                          required="true"
                          id="cityy"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Enter your city"
                          style={{ paddingRight: "2rem" }}
                        />
                        <figure id="figure" style={{ marginLeft: "-11rem" }}>
                          <img
                            src={CityIcon}
                            height="20px"
                            width="18px"
                            alt="figure"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex ml-2 "
                    style={{ marginTop: "-2rem", fontSize: "15px" }}
                  >
                    <div className="form-group ml-5 ">
                      <button
                        type="submit"
                        className=" btn ml-5 text-white text-center"
                        style={{
                          // backgroundColor: "#4997DE",
                          backgroundColor: "#0094DE",
                          // background: "rgb(66, 103, 178)",
                          padding: "0.3rem",
                          borderRadius: " 1rem",
                          width: "10rem",
                        }}
                        onClick={PostData}
                      >
                        Submit
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

export default SubscribePopup;
