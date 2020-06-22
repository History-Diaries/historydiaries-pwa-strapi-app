import React from "react";
import Logo from "../Assets/Images/Logo.png";
interface Props {}

const SplashScreen = (props: Props) => {
  return (
    <div className="splash">
      <div className="splash-cont">
        <img className="splash-icon" src={Logo} alt="History Diaries" />
      </div>
    </div>
  );
};

export default SplashScreen;
