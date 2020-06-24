import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
interface Props {}

const MediaMentions = (props: Props) => {
  return (
    <Carousel>
      <div>
        <img src="https://via.placeholder.com/1920x1080" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1920x1080" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1920x1080" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1920x1080" />
      </div>
    </Carousel>
  );
};

export default MediaMentions;
