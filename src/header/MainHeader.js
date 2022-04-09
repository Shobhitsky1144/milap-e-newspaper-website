import React from "react";
import logo from "../Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import ads from "../assests/ad.webp";
import "./MainHeader.css";
import UserIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
import AppStore from "../assests/Icon-UI/app-store-google-play-icons-color-icons-app-store-google-play-colors-vector-illustration-145688828 1.png";
import PlayStore from "../assests/Icon-UI/app-store-google-play-icons-color-icons-app-store-google-play-colors-vector-illustration-145688828 2.png";

const MainHeader = () => {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "7px solid rgb(0, 148, 222)",
          height: "133px",
          width: "100%",
          padding: "10px",
        }}
      >
        <div id="ads">
          <span
            className="ad "
            style={{
              color: "black",

              borderRadius: "10px",

              fontSize: "25px",
            }}
          >
            Advertise
          </span>
        </div>
        <div className=" image">
          <img src={logo} id="im" />
        </div>
        <div className="pop">
          {/* <span
            className="social"
            style={{
              color: "black",
              display: "flex",
              fontSize: "25px",
            }}
          > */}
          <div className="pope">
            <span>
              <img
                src={AppStore}
                className=""
                alt=""
                width="114"
                height="42px"
              />
            </span>
            <span>
              <img src={PlayStore} alt="" width="114" height="38" />
            </span>
          </div>
          <div
            style={{
              // position: "relative",
              // right: "219px",
              // top: "80px",
              display: "flex",
              flexDirection: "row",
              width:'100%',
              paddingLeft:'2px'
            }}
          >
            {/* <a href="/milapepaper/facebook" target='_blank'> */}
            <a href="https://www.facebook.com/thedailymilap" target='_blank'>
             
              {/* <Link to="/milapepaper/facebookpage" target='_blank'> */}
              <FacebookIcon style={{ color: "#1977f2" }} className="mr-2 " />
              {/* </Link> */}
            </a>
            <a href="https://twitter.com/TheDailyMilap" target='_blank'>
            {/* <a href="/milapepaper/twitter" target='_blank'> */}
              <TwitterIcon style={{ color: "#1d9bf0" }} className="mr-2" />
            </a>
            <a href="https://www.youtube.com/channel/UCpjON6GQmjvHFIQFXZmL5Nw" target='_blank'>
            {/* <a href="/milapepaper/youtube" target='_blank'> */}
              <YouTubeIcon style={{ color: "#f24028" }} />
            </a>
          </div>
          {/* </span> */}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
