import React from "react";
import CV from "./CV";
import image from "../../assets/realdp.jpg"

const Header = () => {
  return (
    <>
      <div className="container">
         <div className="row">
            <div className="col-md-12 mt-5 text-center">
              <h5>Hello,I'm</h5>
              <h1>Dipak Pathak</h1>
              <h6>Web Developer</h6>
            </div>
            <div className="col-md-12">
              {/* CV */}
              <CV/>
            </div>
            <div className="col-md-4 mx-auto">
               <img className="img-fluid mydp w-100" src={image} alt="profile" />
            </div>
         </div>
      </div>
    </>
  );
};

export default Header;
