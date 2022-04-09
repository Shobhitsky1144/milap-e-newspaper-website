import React, { Suspense, lazy, useEffect } from "react";
import PdfViewer from "./pdf/PdfViewer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserLogin from "./login-user/UserLogin";
// import UserSignup from "./user-register/UserSignup";
import AdminLogin from "./admin/AdminLogin";
import AdminPanel from "./admin/AdminPanel";
import UploadSection from "./admin/UploadSection";
import AdminNotification from "./admin/AdminNotification";
import CurrentArticle from "./admin/CurrentArticle";
import AllUsers from "./admin/AllUsers";
import FbPage from "./pdf/Fb";
import Twitter from "./pdf/Twitter";
import Youtube from "./pdf/Youtube";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/milapepaper" component={PdfViewer}></Route>

          {/* <Route exact path="/milapepaper/userlogin" component={UserLogin}></Route> */}
          {/* <Route
            exact
            path="/milapepaper/usersignup"
            component={UserSignup}
          ></Route> */}
          <Route exact path="/milapepaper/facebook" component={FbPage}></Route>
          <Route exact path="/milapepaper/twitter" component={Twitter}></Route>
          <Route exact path="/milapepaper/youtube" component={Youtube}></Route>
          <Route
            exact
            path="/milapepaper/adminlogin"
            component={AdminLogin}
          ></Route>
          {/* <Route exact path="/milapepaper/adminpanel" component={AdminPanel}></Route> */}
          <Route
            exact
            path="/milapepaper/adminuploadsection"
            component={UploadSection}
          ></Route>
          <Route
            exact
            path="/milapepaper/adminnotifications"
            component={AdminNotification}
          ></Route>
          <Route
            exact
            path="/milapepaper/admincurrentarticle"
            component={CurrentArticle}
          ></Route>
          <Route
            exact
            path="/milapepaper/allusers"
            component={AllUsers}
          ></Route>
        </Switch>
      </Router>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default App;
