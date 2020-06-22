import React from "react";
import Logo from "../Assets/Images/Logo.png";
interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <div>
            <img className="footer-logo" src={Logo} alt="Logo-img" />
          </div>
          <div>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
