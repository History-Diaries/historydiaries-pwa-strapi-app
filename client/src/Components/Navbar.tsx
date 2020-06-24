import React from "react";
import Logo from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
interface Props {}

const Navbar = (props: Props) => {
  const handleMenu = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const handleClick = (e: any, handleMenu: any) => {
    handleMenu.current.classList.toggle("change");
    setMenu(!menu);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="brand">
            <img className="logo" src={Logo} alt="Logo-Icon" />
            History Diaries
          </div>
        </Link>

        <div className="nav-items no-mobile">
          <div className="nav-item">
            <HashLink className="color-secondary" to="/#out-team">
              About Us
            </HashLink>
          </div>
          <div className="nav-item">
            <Link className="color-secondary" to="/programs">
              Programs
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/reach">Reach Us</Link>
          </div>
          <div className="nav-item">
            <span>
              <Link className="n-btn" to="/blog">
                Blog
              </Link>
            </span>
          </div>
        </div>
        <div className="v-center">
          <div
            className="menu no-desktop"
            ref={handleMenu}
            onClick={(e) => handleClick(e, handleMenu)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="mobile-menu no-desktop">
          <div className="nav-items-mobile">
            <div
              onClick={(e) => {
                handleClick(e, handleMenu);
              }}
              className="m-nav-item"
            >
              <HashLink className="color-secondary" to="/#out-team">
                About Us
              </HashLink>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, handleMenu);
              }}
              className="m-nav-item"
            >
              <Link to="/programs"> Programs</Link>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, handleMenu);
              }}
              className="m-nav-item"
            >
              <Link to="/reach"> Reach Us</Link>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, handleMenu);
              }}
              className="m-nav-item m-btn"
            >
              <span>
                <Link className="m-n-btn" to="/blog">
                  Blog
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
