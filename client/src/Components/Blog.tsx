import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "react-fade-in";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import format from "date-fns/format";
import { parseISO } from "date-fns";

interface Props {}

const Blog = (props: Props) => {
  const [state, setState] = React.useState([
    { Title: "", Summary: "", Date: "", Content: "" },
  ]);
  const getData = async () => {
    const res = await axios.get("http://localhost:1337/blogs");
    setState([...res.data]);
  };
  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    getData();
  }, []);
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
          {state.map((e, i) => (
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
                    <p>
                      <ReactMarkdown source={e.Title} />
                    </p>
                  </Link>
                </div>
                <div className="blog-list-description">
                  <ReactMarkdown source={e.Summary} />
                </div>
                <div className="blog-list-date">
                  <div>{String(parseISO(e.Date))}</div>
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
