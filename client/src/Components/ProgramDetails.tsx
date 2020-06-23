import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "./Footer";
import YouTube from "react-youtube";
import { BrowserView, MobileView } from "react-device-detect";
interface Props {}

const ProgramDetails = (props: Props) => {
  return (
    <div>
      <div className="home">
        <div className="center">
          <LazyLoadImage
            alt={"blog-image"}
            effect="blur"
            className="banner mod no-shadow"
            src={"https://via.placeholder.com/1920x1080"} // use normal <img> attributes as props
          />
        </div>
        <div className="event-section">
          <div className="e-sec-1">
            <div className="e-content">
              <p className="heading-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                aut.
              </p>
              <p className="c-grey">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, repellat voluptates? Fugit, dolorem, dicta magni
                dignissimos unde obcaecati ex quibusdam totam ducimus labore
                consectetur, voluptatum consequatur rerum accusantium dolores
                voluptas? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Blanditiis deleniti saepe a, distinctio nihil aut eos
                dolore. Quibusdam est, exercitationem explicabo voluptates
                aliquid molestiae natus et recusandae sint neque libero? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                at eveniet ea deserunt molestiae, cumque iusto itaque cum
                suscipit reprehenderit aut quam vel, pariatur fugit, laboriosam
                perspiciatis alias placeat ab?Perspiciatis placeat iure sunt
                corrupti corporis quisquam dolorem voluptatibus dolore in
                aspernatur atque, ea neque ipsa, quo qui fugiat expedita dolorum
                nobis minus odit. Eveniet mollitia quia aliquid nobis earum!
              </p>
              <div className="video-holder">
                <BrowserView>
                  <YouTube
                    className="video-i"
                    videoId="2g811Eo7K8U"
                    opts={{
                      height: "300",
                      width: "640",
                      playerVars: {
                        autoplay: 1,
                      },
                    }}
                  />
                </BrowserView>

                <MobileView>
                  <YouTube
                    videoId="2g811Eo7K8U"
                    opts={{
                      height: "150",
                      width: "300",
                      playerVars: {
                        autoplay: 1,
                      },
                    }}
                  />
                </MobileView>
              </div>
            </div>
          </div>
          <div className="e-sec-2">
            <div className="e-list">
              <div className="e-item">
                <p className="t-def">Deadline</p>
                <p className="c-grey-m">26 June, 2020</p>
              </div>
              <div className="e-item">
                <p className="t-def">Deadline</p>
                <p className="c-grey-m">₹ 200</p>
              </div>
              <div className="e-item">
                <div className="c-btn m-btn spread">Register</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProgramDetails;
