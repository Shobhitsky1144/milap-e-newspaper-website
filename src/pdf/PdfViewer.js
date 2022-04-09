// import MainHeaderCopy from "../header/mainHeaderCopy";
import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";

import $ from "jquery";
import "turn.js";
import Turn from "./Turn";
// import PDFViewer from "pdf-viewer-reactjs";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { Page } from "react-pdf";
// import pdf from "../p2.pdf";
import PDFMerger from "pdf-merger-js/browser";
import SubscribePopup from "./SubscribePopup";
import { pdfjs } from "react-pdf";
import MainHeader from "../header/MainHeader";
import Header from "../header/Header";
import Merge from "./Merge";
import Dialog from "@mui/material/Dialog";
import "date-fns";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import FlipPage from "react-flip-page";
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
import Snackbar from '@mui/material/Snackbar';
// import "./PdfViewerCopy.css";
import MuiAlert from '@mui/material/Alert';
import Footer from "../footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
//sidebar icons
import BreakingNewsIcon from "../assests/Icons-Web and Admin/Notification 1x-black.png";
import VideosIcon from "../assests/Side menu icons/Youtube3 1.png";
import FacebookIcon from "../assests/Side menu icons/Facebook 1x.png";
import TwitterIcon from "../assests/Side menu icons/Twitter-Logo 1.png";
import ContactIcon from "../assests/Side menu icons/Contact us 1x.png";
import FAQIcon from "../assests/Side menu icons/FAQ 1x.png";
import TermIcon from "../assests/Side menu icons/Terms and conditions 1x.png";
import PrivacyIcon from "../assests/Side menu icons/Privacy and policy 1x.png";
import LoginPopup from "./LoginPopup";
import { toast } from "react-toastify";
import ProfileIcon from "../assests/Icons-Web and Admin/Profile 1x.png";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [loadViewer, setLoadViewer] = useState(false);
  const newDate = new Date();
  const turnRef = useRef(null);
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [full, setFull] = useState();
  const demo = useRef();

  const book = useRef();
  const flipPage = useRef();
  const [load, setLoad] = useState(false);

  const [pdfNumber, setPdfNumber] = useState();

  const [pdfFile, setPdfFile] = useState();
  const [totalPages, setTotalPages] = useState([]);
  const [tempTotalPages, setTempTotalPages] = useState([]);
  const [other, setOther] = useState([]);
  const [tempOther, setTempOther] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [tempThumbnailImages, setTempThumbnailImages] = useState([]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [doc, setDoc] = useState(1);
  const [toy, setToy] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState();
  const [selectedDate, setSelectedDate] = useState(newDate);
  const [tempSelectedDate, setTempSelectedDate] = useState('');
  const  [dateNotificationMsg,setDateNotificationMsg]=useState('');
  const [showDateNotification,setShowDateNotification]=useState(false)
  // const [reloadContentWithNewDate,setReloadContentWithNewDate]=useState(false);
  const [showBreakingNewsNotification,setShowBreakingNewsNotification]=useState(false);
  const [openn, setOpenn] = useState();
  const [name, setName] = useState("");
  const options=  {
    display: "single",
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    duration: 2500,
    page:(localStorage.getItem('realoadPrevPage')=='true')?Number(localStorage.getItem('page')):totalPages,
    // page:totalPages,
    pages:totalPages,
    
    when: {
      turned: function (e, page) {
        console.log("Current view: ", $(this).turn("view"));
      },
    },
  }

  // const [options,setOptions]=useState(
  //   {
  //     display: "single",
  //     acceleration: true,
  //     gradients: !$.isTouch,
  //     elevation: 50,
  //     duration: 2500,
  //     // page:(localStorage.getItem('page')!=null)?Number(localStorage.getItem('page')):totalPages,
  //     page:totalPages,
  //     pages:totalPages,
      
  //     when: {
  //       turned: function (e, page) {
  //         console.log("Current view: ", $(this).turn("view"));
  //       },
  //     },
  //   }
  // );
  const getDate = (date) => (date < 10 ? `0${date}` : date);
  const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${getDate(
    selectedDate.getDate()
  )}`;

  // const options = {
  //   display: "single",
  //   acceleration: true,
  //   gradients: !$.isTouch,
  //   elevation: 50,
  //   duration: 2500,
  //   // page:(localStorage.getItem('page')!=null)?Number(localStorage.getItem('page')):totalPages,
  //   page:totalPages,
  //   pages:totalPages,
    
  //   when: {
  //     turned: function (e, page) {
  //       console.log("Current view: ", $(this).turn("view"));
  //     },
  //   },
  // };

  const getFile = async (date) => {
    // debugger;
    setLoadViewer(false);
    const result = await Axios.get(
      // "http://premonasia.westus2.cloudapp.azure.com/api/milapepaper/2021-11-22"
      `http://premonasia.westus2.cloudapp.azure.com/api/milapepaper/${date}`
    );
    console.log("rt", result.data);

    let arr = [];

    arr = result.data.ePaperFilePages;

    console.log("result", result);
    let v = arr.length;


    let thumbnailArray = [];
    let tempArr = [];
    for (var i = 0;i < v; i++) {
      tempArr.push({
        id: i,
        blob: result.data.ePaperFilePages[i]?.imagePageUrl,
      });
      thumbnailArray.push({
        id: i,
        blob: arr[i]?.thumbnailImageUrl,
      });
    }

    await tempArr?.reverse();

    console.log('date', result.data.ePaperPublishDay);
    if(new Date(result.data.ePaperPublishDay).getDate()!=new Date(date).getDate())
    {
        setShowDateNotification(true);
        setDateNotificationMsg(`ePaper for ${new Date(date).toDateString()} is not available right now.we are showing ePaper for ${new Date(result.data.ePaperPublishDay).toDateString()}`)
        
        let d=new Date(result.data.ePaperPublishDay)
        
        localStorage.setItem('date',`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
    }
    setTotalPages(v);
    setSelectedDate(new Date(result.data.ePaperPublishDay))
    console.log('new date', newDate);

    setOther(tempArr);
    setThumbnailImages(thumbnailArray);
    console.log("blobbb", other);
    console.log('got date',new Date(result.data.ePaperPublishDay))
    console.log('selected date',selectedDate)
//     }
//     else{
//       setShowDateNotification(true);
//       setDateNotificationMsg(`e-Paper for ${new Date(date).toDateString()} is not available right now. do you want to view earliest e-paer of  ${new Date(result.data.ePaperPublishDay).toDateString()} ?`)
//       setTempTotalPages(v);
//       setTempSelectedDate(new Date(result.data.ePaperPublishDay))
//       setTempOther(tempArr);
//       setTempThumbnailImages(thumbnailArray);

// console.log('date not equal')
// console.log('got date',new Date(result.data.ePaperPublishDay).getDate())
//     console.log('selected date',selectedDate.getDate())
//     }
  };



  
  const getDataByDate = (date) => {
    const date1 = `${date.getFullYear()}-${date.getMonth() + 1}-${getDate(
      date.getDate()
    )}`;
    localStorage.setItem('date',date1)
// debugger;
    // setSelectedDate(date);
    getFile(date1);

  }
  const reloadContentWithNewDate=()=>{

    setShowDateNotification(false)
    //  setTotalPages(tempTotalPages);
    //   setSelectedDate(tempSelectedDate)
      
    //   setOther(tempOther);
    //   setThumbnailImages(tempThumbnailImages);
      
  }
  useEffect(() => {
    // console.log('l',this.el);

    if (other && thumbnailImages) {
      // setTimeout(() => {
      //   setLoadViewer(true);
      // }, 500);
          
      setLoadViewer(true);
      setTimeout(()=>{
        localStorage.setItem('realoadPrevPage','false')  
        
      },3000)
      
      console.log('in other load',localStorage.getItem('realoadPrevPage'))
    }
    

  }, [other, thumbnailImages]);

  useEffect(() => {

    // setLoadViewer(false);
    // debugger;
    
    if(localStorage.getItem('date')==null ||(localStorage.getItem('expirydate')!=(new Date().getDate())))
    {
      // debugger;
      console.log('not set')
    
      localStorage.setItem('date',date)
      // localStorage.setItem('page',totalPages)
      localStorage.setItem('expirydate',new Date(date).getDate())
      // options.page=Number(localStorage.getItem('page'))
      console.log('options',options);
      getFile(date);
    }else{
      console.log('set')
    // let op={
    //     display: "single",
    //     acceleration: true,
    //     gradients: !$.isTouch,
    //     elevation: 50,
    //     duration: 2500,
    //     // page:(localStorage.getItem('page')!=null)?Number(localStorage.getItem('page')):totalPages,
    //     page:totalPages,
    //     pages:totalPages,
        
    //     when: {
    //       turned: function (e, page) {
    //         console.log("Current view: ", $(this).turn("view"));
    //       },
    //     },
    //   };
    
     localStorage.setItem('realoadPrevPage','true')  
     console.log('in first load',localStorage.getItem('realoadPrevPage'))
      options.page=Number(localStorage.getItem('page'))
      // setOptions(op)
      console.log('options',options);
      console.log('pageNum',Number(localStorage.getItem('page')))
      getFile(localStorage.getItem('date'));
    }

    

    // console.log('got date',new Date(localStorage.getItem('date')).getDate())
    // getFile(date);
    
    
    console.log('got date',new Date(localStorage.getItem('date')).getDate())
    getFile(date);
    if(localStorage.getItem("name")==null)
    {
      localStorage.setItem("name","null")
    }
    if (localStorage.getItem("name")!= "null") {
      setName(localStorage.getItem("name"));
    }
    if (localStorage.getItem("name")!= "null") {
      console.log('inside setOpen');
      setTimeout(() => {
        setOpen(true);
      }, 3000);
    }
    
  }, []);
  const SubscribeUser = async (
    firstName,
    lastName,
    email,
    state,
    city,
    country,
    password
  ) => {
    const res = await Axios.post(
      "http://premonasia.westus2.cloudapp.azure.com/api/Auth/member-register",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        state: state,
        city: city,
        country: country,
        password: password,
      }
    );

    if (res) {
      toast("Subscribe Successfull");
      setName(res.data.userdata.firstName);
      setOpen(false);
      console.log("subscribe data", res);
    } else {
      toast.error("Invalid Credentials");
    }
  };
  const LoginUser = async (
    email,

    password
  ) => {
    // debugger;
    const res = await Axios.post(
      "http://premonasia.westus2.cloudapp.azure.com/api/Auth/login",

      {
        email: email,

        password: password,
      }
    );

    console.log("res",res)
    if (res.status == 200) {
      toast("Login Successfull");
      setOpenn(false);
      console.log("login data", res.status);
      setName(res.data.userdata.firstName);

      localStorage.setItem("name", res.data.userdata.firstName);
    } else {
      alert('non login');
      console.log("Non login")
      alert("invalid");
      toast.error("Invalid Credentials");
      setOpenn(true);
    }
  };

  return (
    <>
      <div>
      <Snackbar
         anchorOrigin={{vertical:'top', horizontal:'right' }}
          open={showDateNotification} 
          autoHideDuration={6000}
          message={dateNotificationMsg}
           action={
            <>
            <Button color="inherit" size="small" onClick={(e)=>reloadContentWithNewDate()} style={{backgroundColor:'white',borderRadius:'5px  '}}>
              Ok
            </Button>
            {/* <Button color="inherit" size="small" onClick={(e)=>setShowDateNotification(false)}>
            No
          </Button> */}
          </>
          }
          />
           
           {/* sx={{ bottom: { xs: 90, sm: 0 } }}
        

                  {/* <Alert  severity="success" sx={{ width: '100%' }}>
            sdbfsjdffhsgf
          </Alert> */}
        {/* </Snackbar> */}
          <Snackbar
          anchorOrigin={{vertical:'top', horizontal:'left' }}
          className='news-notification'
          style={{left:'255px'}}
            open={showBreakingNewsNotification} 
            autoHideDuration={6000}
            message={'Comming Soon'}
            // sx={{ bottom: { xs: 0, sm: 90 } }}
            action={
            
              <Button color="inherit" size="small" onClick={(e)=>setShowBreakingNewsNotification(false)} style={{backgroundColor:'white',borderRadius:'5px  '}}>
                Ok
              
            </Button>
            }
            />

        <MainHeader />
        
        <div
          className="menu header "
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            boxShadow: " 0px 1px 5px #757575",
            height: "30px",
          }}
        >
          <div
            className=""
            style={{
              width: "25%",

              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                display: "flex",
                cursor: "pointer",
                color: "black",
                justifyContent: "center",
              }}
              // className='sidebar'
            >
              <div>
                <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              </div>

              <Drawer

                anchor="left"
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
              >
                <List>
                <div
                    className=""
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                      justifyContent: "center",

                      padding: "0px 10px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={ProfileIcon}
                        alt="header_logo"
                        width="86px"
                        height="86px"
                      />

                      <span
                        style={{
                          color: "white",
                          backgroundColor: "#0094DE",
                          borderRadius: "20px",
                          padding: "0px 9px",
                        }}
                      >
                        {name ? name : "Subscribe"}
                      </span>
                    </span>
                    <CloseIcon
                      onClick={() => setIsSidebarOpen(false)}
                      style={{ cursor: "pointer",position:'relative',left: "49px",
                      top: "6px" }}
                    />
                  </div>
                  <Divider />
                  {[
                    { title: "Breaking News", image: BreakingNewsIcon,link:'' },
                    { title: "News Videos", image: VideosIcon,link:'https://www.youtube.com/channel/UCpjON6GQmjvHFIQFXZmL5Nw' },
                    { title: "Twitter Feed", image: TwitterIcon,link:'https://twitter.com/TheDailyMilap' },
                    { title: "Facebook Page", image: FacebookIcon,link:'https://twitter.com/TheDailyMilap'},
                    { title: "Contact Us", image: ContactIcon,link:'' },
                    // { title: "FAQ", image: FAQIcon,link:'' },
                    { title: "Terms & Conditions", image: TermIcon,link:'' },
                    { title: "Privacy Policy", image: PrivacyIcon,link:'' },
                   
                  ].map((text, index) => (
                    
                    <>
                    
                    
                      {
                      text.link?
                      <a href={text.link} target='_blank' className='sidebar-list'>
                      <ListItem
                        // className="list"
                        button
                        // key={text.title}
                        style={{ display: "flex", justifyContent: "center" }}
                        
                      >
                        
                        <ListItemIcon>
                          <img
                            src={text.image}
                            height="20"
                            width="22"
                           
                          />
                        </ListItemIcon>

                        <ListItemText className="list" primary={text.title} />
                      </ListItem>
                      </a>
                      :
                      <ListItem
                        // className="list"
                        button
                        // key={text.title}
                        style={{ display: "flex", justifyContent: "center" }}
                        onClick={(e)=> index==0 && setShowBreakingNewsNotification(true)}
                        // { index==0 &&
                        //   onClick={(e)=>setShowBreakingNewsNotification(false)}
                        // }
                      >
                        
                        <ListItemIcon>
                          <img
                            src={text.image}
                            height="20"
                            width="22"
                           
                          />
                        </ListItemIcon>

                        <ListItemText className="list" primary={text.title} />
                      </ListItem>
                       }
                    

                      <Divider />
                    </>
                  ))}
                </List>
              </Drawer>
            </div>
            
            {(name=="") ? (
              <>
                <div
                  style={{
                    // width: "70%",
                    backgroundColor: "#0094DE",
                    color: "white",
                    borderRadius: "10px",
                    padding: "0px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(!open)}
                >
                  Subscribe
                </div>
                <div
                  className="ml-2"
                  style={{
                    // width: "70%",
                    backgroundColor: "#0094DE",
                    color: "white",
                    borderRadius: "10px",
                    padding: "0px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenn(!open)}
                >
                  Login
                </div>
              </>
            ) : (
              <>
                <div
                  className="ml-2"
                  style={{
                    // width: "70%",
                    backgroundColor: "#0094DE",
                    color: "white",
                    borderRadius: "10px",
                    padding: "0px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.setItem("name", null);
                    setName("");
                  }}
                >
                  Logout
                </div>
              </>
            )}
          </div>

          <div
            className=""
            style={{
              width: "55%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ color: "black" }}>

              {/* Thursdahy, 21 November , 2021 | 01 */}
              {/* <p> */}
              {`${selectedDate.toDateString()}`}
              {/* {`${getDate(selectedDate.getDate())} ${selectedDate.getMonth() + 1} ,${selectedDate.getFullYear()}`}; */}
              {/* </p> */}
              {
                console.log("date", selectedDate)
              }
            </div>
          </div>
          <div
            className=" right "
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              minWidth: '264px'
            }}
          >
             <div
              className="home button"
              title="Home"
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "6px",
                cursor: "pointer",
                // color: "gray",
                color: "black",
              }}
              onClick={() => {
                if (turnRef.current) {
                  turnRef.current.gotoSpecificPage(0);
                }
              }}
            >
              <HomeIcon />
            </div>
            <div style={{ width: "30%" }}>
              {" "}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  format="yyyy-MM-dd"
                  inputVariant="standard"
                  maxDate={new Date()}
                  minDate="2021"
                  value={selectedDate}
                  onChange={(date) => getDataByDate(date)}
                // style={{backgroundColor:'#007bff'}}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div style={{ width: "14%" }}>
              <img
                className=""
                src={CalenderIcon}
                width={20}
                title="Calender"
                height={18}
                style={{
                  cursor: "pointer",
                  // width: "50%",
                }}
                alt="icon"
              />
            </div>
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {" "}
              <img
                src={NotificationIcon}
                height={21}
                title="Notification"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      
      {
        console.log('totalPages', totalPages)
      }
      
      <SubscribePopup
        open={open}
        setPopup={(val) => {
          setOpen(val);

          console.log("modal", val);
        }}
        SubscribeUser={SubscribeUser}
      />
      <LoginPopup
        openn={openn}
        setPopupp={(val) => {
          setOpenn(val);
          console.log("modal", val);
        }}
        LoginUser={LoginUser}
      />
      <div className="pt-2" style={{ width: "100%", height: "1900px" }}>
        {loadViewer ? (
          <Turn
            ref={turnRef}
            options={options}
            // style={{width:'100%'}}
            className="magazine"
            startIndex={totalPages}
            thumbnailImages={thumbnailImages && thumbnailImages}
            isSidebarOpen={isSidebarOpen}
          >
            {other?.map((pd, index) => (
              <>
                <img
                  key={index}
                  src={pd.blob}
                  className="viewer-image"
                  style={{
                    width: "100%",
                    scale: 'inherit',
                    // aspectRatio: "auto 1102 / 1638",
                    // height:'1200px',
                    height: 'auto',
                    overflow: 'hidden',
                    objectFit: 'unset',
                    // transition: "background-color 300ms",
                  }}
                />
              </>
            ))}
          </Turn>
        ) : (
          ""
        )}
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default PdfViewer;
