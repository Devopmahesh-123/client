import React, { useState,useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Dashboard.css";
import profile from '../img/profile.jpg';
import Footer from "../component/Footer";
import Navbar from "../component/NavBar";
import SideBar from "../component/SideBar";

const DefaultLayout = () => {
  const [sidStyle,setsideStyle] = useState("sidebar pe-4 pb-3");
  const [contentStyle,setcontentStyle] = useState("content");
  const [showButton, setShowButton] = useState(false);
 
  // Start from here Scroll Back To Top events
function backtoTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
}
// End here 
// Password Change start
const [show,setShow] = useState(false); 
const handleShow = (event) => {
  event.preventDefault();
  setShow(true);
}
// End here
  const sideButton = (event)=>{
    event.preventDefault();
      if(sidStyle === "sidebar pe-4 pb-3")
      {
          setsideStyle("sidebar pe-4 pb-3 open");
          setcontentStyle("content open");
      }
      else
      {
          setsideStyle("sidebar pe-4 pb-3");
          setcontentStyle("content");
      }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <div className="bodyColor">
      {/* <div className={sidStyle} style={{borderRight:'1px solid #80808030'}}>
        <SideBar profile={profile}/>
      </div> */}
      {/* <div className={contentStyle}> */}
            {/* <Navbar handleShow={handleShow} sideButton={sideButton} profile={profile}/> */}
            <Outlet />
            {/* <Footer/> */}
            {/* {showButton && ( <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top top_button" onClick={(event)=>backtoTop(event)}><i className="bi bi-arrow-up bm"></i></Link>)} */}
            {/* <PasswordModal show={show} setShow={setShow}/> */}
            {/* </div> */}
    </div>
  );
};

export default DefaultLayout;
