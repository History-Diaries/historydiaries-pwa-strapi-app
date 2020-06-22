import React from "react";
import Logo from "../Assets/Images/Logo.png";
import Facebook from "../Assets/Images/facebook.svg";
import Instagram from "../Assets/Images/instagram-sketched.svg";
import Twitter from "../Assets/Images/twitter.svg";
import LinkedIn from "../Assets/Images/linkedin.svg";
interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <div>
            <img className="footer-logo" src={Logo} alt="Logo-img" />
          </div>
          <div className="social-media">
            <div>
              <a href="">
                <img
                  className="social-icon"
                  src={Facebook}
                  alt="facebook-icon"
                />
              </a>
              <a href="">
                <img
                  className="social-icon"
                  src={Instagram}
                  alt="instagram-icon"
                />
              </a>
              <a href="">
                <img className="social-icon" src={Twitter} alt="twitter-icon" />
              </a>
              <a href="">
                <img
                  className="social-icon"
                  src={LinkedIn}
                  alt="linkedin-icon"
                />
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
