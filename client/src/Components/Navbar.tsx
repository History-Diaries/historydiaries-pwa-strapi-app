import React from "react";
interface Props {}

const Navbar = (props: Props) => {
  const handleMenu = React.useRef(null);
  const MobileMenu = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const handleClick = (e: any, handleMenu: any, MobileMenu: any) => {
    handleMenu.current.classList.toggle("change");

    const toggleState = !menu ? "block" : "none";
    MobileMenu.current.style.display = `${toggleState}`;
    setMenu(!menu);
  };

  return (
    <>
      <div className="navbar">
        <div className="brand">History Diaries</div>
        <div className="nav-items no-mobile">
          <div className="nav-item">About Us</div>
          <div className="nav-item">Past Programs</div>
          <div className="nav-item">Upcomming Programs</div>
          <div className="nav-item">Contact</div>
          <div className="nav-item">
            <span className="n-btn">Blog</span>
          </div>
        </div>
        <div className="no-desktop v-center">
          <div
            className="menu"
            ref={handleMenu}
            onClick={(e) => handleClick(e, handleMenu, MobileMenu)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="mobile-menu no-desktop" ref={MobileMenu}>
        <div className="nav-items-mobile">
          <div className="m-nav-item">About Us</div>
          <div className="m-nav-item">Past Programs</div>
          <div className="m-nav-item">Upcomming Programs</div>
          <div className="m-nav-item">Contact</div>
          <div className="m-nav-item m-btn">
            <span className="m-n-btn">Blog</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
