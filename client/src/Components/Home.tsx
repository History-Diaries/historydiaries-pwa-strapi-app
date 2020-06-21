import React from "react";
import Mission from "../Assets/Images/idea.svg";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="home">
      <div className="banner"></div>
      {/* Content section */}
      <div className="section-main">
        <div className="section s-1">
          <div className="subsection s-1">
            <img className="mission-icon" src={Mission} alt="Mission-Icon" />
          </div>
          <div className="subsection s-2">
            <p className="heading">Vission</p>
            <div className="content">
              <p className="text-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                optio. Sint omnis nihil dolor vero nobis, minus nostrum
                consequatur iusto neque odit modi voluptatum magni cupiditate,
                repellendus libero, ut adipisci? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos nam aliquam, ex, error
                perspiciatis ipsum eligendi laborum quia debitis consequatur
                facilis impedit dignissimos fugit voluptatibus minima soluta
                iusto rerum numquam sapiente laudantium nihil ut! Accusantium ad
                amet, dolor porro vero ipsa quasi, quis alias quas nobis
                delectus similique. Harum, aspernatur?
              </p>
            </div>
          </div>
        </div>
        <div className="section s-1">
          <div className="subsection s-3">
            <p className="heading">Vission</p>
            <div className="content">
              <p className="text-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                optio. Sint omnis nihil dolor vero nobis, minus nostrum
                consequatur iusto neque odit modi voluptatum magni cupiditate,
                repellendus libero, ut adipisci? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos nam aliquam, ex, error
                perspiciatis ipsum eligendi laborum quia debitis consequatur
                facilis impedit dignissimos fugit voluptatibus minima soluta
                iusto rerum numquam sapiente laudantium nihil ut! Accusantium ad
                amet, dolor porro vero ipsa quasi, quis alias quas nobis
                delectus similique. Harum, aspernatur
              </p>
            </div>
          </div>
          <div className="subsection s-4">
            <img className="mission-icon" src={Mission} alt="Mission-Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
