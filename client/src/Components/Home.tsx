import React from "react";
import Vision from "../Assets/Images/idea.svg";
import Mission from "../Assets/Images/goal.svg";
import Footer from "./Footer";

interface Props {}

const Home = (props: Props) => {
  const handleScrollerClick = () => {
    window.scrollTo(500, 850);
  };

  const team = [
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "person",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="banner">
          <div className="banner-cont">
            <p className="banner-text">
              "History Diaries" is an initiative to revamp the current
              pedagogical system of history through theatre, classroom
              investigative sessions, tours, drama.
            </p>
            <div className="center">
              <div className="c-btn">Upcoming Events</div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="scroller" onClick={handleScrollerClick}>
            {" "}
            <div>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="section-main">
          <div className="section s-1">
            <div className="subsection s-1">
              <img className="vision-icon" src={Vision} alt="Vision-Icon" />
            </div>
            <div className="subsection s-2">
              <p className="heading">Vision.</p>
              <div className="content">
                <p className="text-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odio, optio. Sint omnis nihil dolor vero nobis, minus nostrum
                  consequatur iusto neque odit modi voluptatum magni cupiditate,
                  repellendus libero, ut adipisci? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quos nam aliquam, ex, error
                  perspiciatis ipsum eligendi laborum quia debitis consequatur
                  facilis impedit dignissimos fugit voluptatibus minima soluta
                  iusto rerum numquam sapiente laudantium nihil ut! Accusantium
                  ad amet, dolor porro vero ipsa quasi, quis alias quas nobis
                  delectus similique. Harum, aspernatur?
                </p>
              </div>
            </div>
          </div>
          <div className="section s-1 mt-4">
            <div className="subsection s-3">
              <img className="mission-icon" src={Mission} alt="Vision-Icon" />
            </div>
            <div className="subsection s-2">
              <div className="content">
                <p className="heading">Mission.</p>
                <p className="text-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odio, optio. Sint omnis nihil dolor vero nobis, minus nostrum
                  consequatur iusto neque odit modi voluptatum magni cupiditate,
                  repellendus libero, ut adipisci? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quos nam aliquam, ex, error
                  perspiciatis ipsum eligendi laborum quia debitis consequatur
                  facilis impedit dignissimos fugit voluptatibus minima soluta
                  iusto rerum numquam sapiente laudantium nihil ut! Accusantium
                  ad amet, dolor porro vero ipsa quasi, quis alias quas nobis
                  delectus similique. Harum, aspernatur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="center">
          <p className="heading color-white">Our Team</p>
        </div>
        <div className="team-profile">
          {team.map((p, index) => (
            <div key={index} className="team-mate">
              <div className="team-image">
                <img
                  className="team-image"
                  src="https://via.placeholder.com/150"
                  alt="person"
                />
              </div>
              <div>
                <p className="mt-1">Person {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="data-section">
        <div className="center">
          <p className="heading ft-size-2 noborder">Our Impact</p>
        </div>
        <div className="data-row">
          <div className="data-cont">
            <div className="data">200+</div>
            <div>
              <p className="sub-data">Students</p>
            </div>
          </div>
          <div className="data-cont">
            <div className="data">14+</div>
            <div>
              <p className="sub-data">Events</p>
            </div>
          </div>
          <div className="data-cont">
            <div className="data">50+</div>
            <div>
              <p className="sub-data">Schools</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
