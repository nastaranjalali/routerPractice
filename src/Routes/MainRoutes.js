import {Route} from 'react-router-dom'
import React from "react";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

const MainRoutes = (url) => {
    return <>
        <Route path={`${url}/contact-us`} exact component={ContactUs}/>
        <Route path={`${url}/`} exact component={Home}/>
    </>
}
export default MainRoutes