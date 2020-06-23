import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface Props {}

const Blog = (props: Props) => {
  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  });
  const list = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="home mt-b">
        <div className="banner h-1">
          <div className="banner-cont">
            <p className="banner-text t2">Latest article title here</p>
            <div className="w-2">
              <p className="t-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                pariatur voluptatibus maxime reiciendis praesentium, beatae
                impedit rerum, veritatis doloremque, suscipit fuga reprehenderit
                in sed fugiat a quidem! Non, vitae. Dolor!
              </p>
            </div>
          </div>
        </div>
        <div className="blog-list">
          {list.map((e, i) => (
            <div key={i} className="blog-item">
              <div className="blog-image">
                <img
                  className="blog-list-image"
                  src="https://via.placeholder.com/150"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <div className="blog-list-title">
                  <Link to={`/blog/${i}`}>
                    {" "}
                    <p>Blog article tile</p>
                  </Link>
                </div>
                <div className="blog-list-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque, harum commodi iusto quas accusamus animi earum dolor?
                  Nulla, accusamus. A ipsa perspiciatis impedit voluptatibus
                  sapiente dolorum tempora eveniet error minus?
                </div>
                <div className="blog-list-date">
                  <div>22 June, 2020. 5:30pm</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;
