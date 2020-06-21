import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <p className="footer-heading">History Diaries</p>
          <div className="social-media">
            <div className="media">
              <img
                className="s-icon"
                src="https://img.icons8.com/material/50/000000/facebook-new.png"
              />
            </div>
            <div className="media">
              <img
                className="s-icon"
                src="https://img.icons8.com/material/24/000000/instagram-new.png"
              />
            </div>
            <div className="media">
              <img
                className="s-icon"
                src="https://img.icons8.com/material/24/000000/twitter-squared.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
