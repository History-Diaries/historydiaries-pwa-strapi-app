import React from "react";
interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="brand">History Diaries</div>
      <div className="nav-items">
        <div className="nav-item">About Us</div>
        <div className="nav-item">Past Programs</div>
        <div className="nav-item">Upcomming Programs</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">
          <span className="n-btn">Blog</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
