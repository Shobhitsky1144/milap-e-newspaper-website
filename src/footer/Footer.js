import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        color: "#B9B9B9",
        borderTop: "5px solid #B9B9B9",
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
      }}
    >
      <div style={{ padding: "11px" }}>
        {" "}
        <div
          className="footer"
          style={{
            // display: "flex",
            // justifyContent: "center",
            fontSize: "16px",
          }}
        >
          Copyright © {new Date().getFullYear()}. All Rights Reserved. The Daily
          Milap Disclaimer| Privacy Policy| Terms of Service
        </div>
        {/* <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          Disclaimer| Privacy Policy| Terms of Service
        </div> */}
      </div>
    </div>
  );
};

export default Footer;