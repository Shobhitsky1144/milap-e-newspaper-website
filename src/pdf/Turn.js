import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import $ from "jquery";
import "turn.js";

import "./pdf.css";

import NotificationIcon from "../assests/Icons-Web and Admin/Notification 1x-black.png";
import UserIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
import CalenderIcon from "../assests/Icons-Web and Admin/Calendar 1x.png";

import Axios from "axios";
import {
  KeyboardDatePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import HTMLFlipBook from "react-pageflip";
import { HorizontalRule, SettingsCell } from "@mui/icons-material";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Logo.png";
import CloseIcon from "@mui/icons-material/Close";


class Turn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageIndex: this.props.options?.pages-this.props.options?.page,
      currentPage: this.props.startIndex
    };
    this.myRef = React.createRef();
    console.log('diff',this.props.options?.pages-this.props.options?.page)
  }

  static defaultProps = {
    style: {},
    className: "",
    options: {},
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
      
      //to hide animation at first load
      // $(this.el).turn("page", this.props.startIndex)
      // $(this.el).turn("page", this.props.startIndex).turn('stop');
    }
    

    // document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    // if (this.el) {
    //   //  $(this.el).turn("destroy").remove();
    //  }
    // document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  // handleKeyDown = (event) => {
  //   if (event.keyCode === 37) {
  //     $(this.el).turn("previous");
  //   }
  //   if (event.keyCode === 39) {
  //     $(this.el).turn("next");
  //   }
  // };
  // function prev(){
	// 	$('#book').turn('previous');
	// }
	// function next(){
	// 	$('#book').turn('next');
	// }
  showPrev = () => {

    // $(this.el).turn('next');
    this.setState({
      activePageIndex: this.props.startIndex - ($(this.el).turn("view")[0] + 1),
      currentPage: $(this.el).turn("view")[0]
    });

    $(this.el).turn('next');
    localStorage.setItem('page',$(this.el).turn("view")[0]);



  };
  showNext = () => {
    
    console.log("nnn", $(this.el).turn("view")[0]);
    $(this.el).turn('previous');
    localStorage.setItem('page',$(this.el).turn("view")[0]);
    this.setState({
      activePageIndex: this.props.startIndex - $(this.el).turn("view")[0],
      currentPage: $(this.el).turn("view")[0]
    });


    console.log("Current page: ", $(this.el).turn("view"));
  };
  gotoSpecificPage = (index) => {
    let x = this.props.startIndex + 1 - (index + 1);
    console.log("x", x);
    $(this.el).turn('page', x);
    localStorage.setItem('page',$(this.el).turn("view")[0]);
    this.setState({ activePageIndex: index, currentPage: $(this.el).turn("view")[0] });
    console.log("startindex", this.props.startIndex);

  };

  render() {
    return (
      <>


        <div
          style={{
            display: "flex",
            // padding: "20px",
            alignItems: "center",
            // width: "100vw",
            // justifyContent: "center",
          }}
        >
          <div
            className='thumbnailBox'
          >
            {this.props.thumbnailImages?.map((data, index) => (
              <div key={index}>
                <img
                  src={data?.blob}
                  className={`thumbnail
              ${this.state.activePageIndex == index && "thumbnail_active"}`}
                  onClick={() => this.gotoSpecificPage(index)}
                  style={{ padding: "5px",width:'89%' }}
                />
                {data?.blob &&
                  <p
                    style={{
                      color: "white",
                      marginTop: "5px",
                      textAlign: "center",
                      marginTop: "-1px",
                      marginBottom: "0px",
                    }}
                  >
                    {index + 1}
                  </p>
                }
              </div>
            ))}

          </div>


          {

            this.state.activePageIndex > 0 &&
            <div className='prevButton' style={{ position: 'fixed', top: "50vh", left: 150, zIndex: this.props?.isSidebarOpen?1:99999 }} >
              {" "}
              <div
                // className="bg-success"
                onClick={this.showPrev}
                style={{ marginLeft: "10px" }}
              >
                <>
                  <i
                    // onClick={this.showPrev}
                    // onClick={() => book.current.pageFlip().flipPrev()}
                    className="fas fa-chevron-left "
                    style={{
                      background: "#4997DE",
                      //  background:  '#D9261C',
                      color: "#FFFFFF",
                      fontSize: "27px",
                      // position: "fixed",
                      marginTop: "1px",
                      zIndex: "1",
                      // borderRadius: "50%",
                      // top: "26rem",
                      // left: "178px",
                      cursor: "pointer",
                    }}
                  ></i>
                </>
              </div>
            </div>
          }
          <div
            className={this.props.className}
            style={Object.assign({}, this.props.style)}
            ref={(el) => (this.el = el)}
          >
            {/* <button onClick={this.showPrev}>Prev</button> */}
            {this.props.children}
            {/* <button onClick={this.showNext}>Next</button> */}
          </div>
          {/* <button style={{ height: "50px" }} onClick={this.showNext}> */}
          {/* Next
        </button> */}

          {

            (this.state.activePageIndex + 1) < this.props?.startIndex &&
            //this.state.currentPage!=this.props.startindex &&

            <div className='nextButton' style={{ position: 'fixed', top: "50vh", right: 25,zIndex:100 }}>
              {" "}
              <div

                onClick={this.showNext}>
                <i
                  // onClick={this.showNext}
                  className="fas fa-chevron-right "
                  style={{
                    background: "#4997DE",
                    // background: "#D9261C",
                    color: "#FFFFFF",
                    fontSize: "27px",
                    // position: "fixed",
                    zIndex: "1",
                    // borderRadius: "50%",
                    // top: "26rem",
                    // right: "0.5rem",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </div>
          }
          {/* <button style={{height:'50px'}} onClick={this.showPrev}>Prev</button> */}

          {
            console.log('cur', this.state.currentPage),
            console.log('props index', this.props?.startIndex)
          }
        </div>
      </>
    );
  }
}
export default Turn;
