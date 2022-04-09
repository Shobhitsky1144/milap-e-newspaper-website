// import React, { useState } from "react";
// import logo from "../Logo.png";
// import mail from "../assests/Icon-UI/Mail.png";
// import Password from "../assests/Icon-UI/Password.png";
// import GoogleIcon from "../assests/Icon-UI/Logo Google 1x.png";
// import FacebookIcon from "../assests/Icon-UI/Facebook 1x.png";
// import { NavLink, useHistory } from "react-router-dom";
// import Axios from "axios";
// // import LogoHeader from "./LogoHeader";
// import "./UserLogin.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

// const UserLogin = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisibility, setPasswordVisibility] = useState(false);

//   const onFormSubmit = () => {
//     if (email !== "" && password !== "") {
//       loginUser();
//     } else {
//       // alert("Email or Password can't be empty");
//       toast.error("Email or Password can't be empty");
//     }
//   };
//   const loginUser = async () => {
//     Axios.post(
//       // `${API_BASE_PATH}/user/login`,
//       `/user/login`,
//       {
//         email,
//         password,
//       },
//       {
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     )
//       .then((res) => {
//         if (res.data) {
//           // alert("Login Sucessfully");
//           toast("Login Sucessfully");
//           history.push("/dashboard");
//         }
//       })
//       .catch((err) => {
//         // alert(err);
//         toast.error(err);
//       });
//   };
//   return (
//     <>
//       <div
//         style={{
//           background: "linear-gradient(#92D8FF,#48A4F9)",
//           // height: "39.2rem",
//           height: "100vh",
//         }}
//       >
//         <section className="sign-in">
//           <div className="container d-flex justify-content-center ">
//             <div className="signin-content">
//               <div className="signin-image text-center mt-5">
//                 <figure>
//                   <img src={logo} alt="Login pic" width="350" height="70" />
//                 </figure>
//               </div>

//               <div className="signin-form h-75 mt-4">
//                 <div className="text-center">
//                   <h4 className="form-title pt-3 ">Sign in</h4>
//                   <p style={{ color: "#565862", fontSize: "14px" }}>
//                     Welcome back, you've been missed!
//                   </p>
//                   <div className="mr-4 mb-3">
//                     <button
//                       type="submit"
//                       className=" btn ml-5 text-white text-center"
//                       style={{
//                         backgroundColor: "#4267B2",
//                         padding: "0.3rem",
//                         borderRadius: " 1rem",
//                         width: "10rem",
//                       }}
//                     >
//                       <span className="pr-2">
//                         <img
//                           src={FacebookIcon}
//                           alt="facebook"
//                           height={21}
//                           width={22}
//                           style={{ backgroundColor: "white" }}
//                         />
//                       </span>
//                       <span style={{ fontSize: "14px" }}>Facebook</span>
//                     </button>

//                     <button
//                       type="submit"
//                       className=" btn ml-5 text-center"
//                       style={{
//                         backgroundColor: "#E1E1E1",
//                         color: "black",
//                         padding: "0.3rem",
//                         borderRadius: " 1rem",
//                         width: "10rem",
//                       }}
//                     >
//                       <span className="pr-2">
//                         <img
//                           src={GoogleIcon}
//                           alt="google"
//                           height={16}
//                           width={16}
//                         />
//                       </span>
//                       <span style={{ fontSize: "14px" }}>Google</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <span
//                     style={{
//                       color: "#8f92a1",
//                       position: "relative",
//                       left: "13.4rem",
//                     }}
//                   >
//                     OR
//                   </span>
//                 </div>
//                 <form method="POST " className="ml-5">
//                   <div className="form-group ">
//                     <label htmlFor="email">
//                       <h6 className="pt-2" style={{ fontSize: "14px" }}>
//                         Email Id
//                       </h6>
//                     </label>
//                     <br />
//                     <input
//                       type="email"
//                       name="email"
//                       required="true"
//                       id="emaill"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email id"
//                       style={{ paddingRight: "3rem" }}
//                     />
//                     <figure id="figure">
//                       <img src={mail} height="22px" width="25px" alt="figure" />
//                     </figure>
//                   </div>

//                   <div className="form-group" style={{ marginTop: "-1.3rem" }}>
//                     <label htmlFor="password">
//                       <h6 style={{ fontSize: "14px" }}>Password </h6>
//                     </label>
//                     <br />
//                     <input
//                       type={passwordVisibility ? "text" : "password"}
//                       name="password"
//                       id="password"
//                       required="true"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       style={{ paddingRight: "3rem" }}
//                     />
//                     <figure
//                       id="figure"
//                       onClick={() => {
//                         if (passwordVisibility) {
//                           setPasswordVisibility(false);
//                         } else {
//                           setPasswordVisibility(true);
//                         }
//                       }}
//                     >
//                       <img
//                         src={Password}
//                         alt="figure"
//                         height="22px"
//                         width="25px"
//                       />
//                     </figure>
//                   </div>

//                   <div
//                     className="d-flex ml-2 "
//                     style={{ marginTop: "-1.7rem", fontSize: "15px" }}
//                   >
//                     <div style={{ fontSize: "14px" }}>
//                       <input
//                         type="checkbox"
//                         placeholder="Remember Me"
//                         // onChange={this.toggleRememberMe}
//                       />{" "}
//                       Remember me
//                     </div>
//                     <div className="pl-5">
//                       <NavLink
//                         id=""
//                         style={{
//                           color: "#4997DE",
//                           marginLeft: "3.9rem",
//                           listStyle: "none",
//                           textDecoration: "none",
//                         }}
//                         to="/forgetpassword"
//                       >
//                         Forgot Password ?
//                       </NavLink>
//                     </div>
//                   </div>

//                   {/* <div className="form-group ml-5 mt-4">
//                     <button
//                       type="submit"
//                       name="signin"
//                       className=" btn w-50 ml-5 text-white"
//                       style={{
//                         backgroundColor: "#3AB060",
//                         padding: "0.3rem",
//                         borderRadius: " 1rem",
//                       }}
//                       onClick={onFormSubmit}
//                     >
//                       Login
//                     </button>
//                   </div> */}
//                   <div
//                     className="d-flex ml-2 "
//                     style={{ marginTop: "-1.7rem", fontSize: "15px" }}
//                   >
//                     <div className="form-group ml-5 mt-5">
//                       <button
//                         type="submit"
//                         className=" btn ml-5 text-white text-center"
//                         style={{
//                           backgroundColor: "#4997DE",
//                           padding: "0.3rem",
//                           borderRadius: " 1rem",
//                           width: "10rem",
//                         }}
//                         onClick={onFormSubmit}
//                       >
//                         Login
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mb-4" style={{ marginTop: "-0.7rem" }}>
//                     <span
//                       className="pl-5 ml-4"
//                       style={{
//                         color: "#565862",
//                         fontSize: "14px",
//                       }}
//                     >
//                       Dont have an account?{" "}
//                     </span>
//                     <NavLink
//                       style={{
//                         color: "#4997DE",
//                         // marginLeft: "3.7rem",
//                         listStyle: "none",
//                         textDecoration: "none",
//                       }}
//                       to="/usersignup"
//                     >
//                       Sign up
//                     </NavLink>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default UserLogin;
