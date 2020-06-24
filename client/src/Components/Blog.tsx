import React from "react";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "react-fade-in";
import axios from "axios";
import format from "date-fns/format";
import { API } from "../config";
import Sandbox from "../Assets/Images/sandbox.svg";
interface Props {}

interface Istate {
  data: Array<any>;
  loading: boolean;
  message: string;
  latestArticle: any;
}
const Blog = (props: Props) => {
  let isCancelled = false;
  const [state, setState] = React.useState<Istate>({
    data: [],
    loading: true,
    message: "",
    latestArticle: null,
  });

  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    const getData = async () => {
      try {
        const response = await axios.get(`${API}/blogs?_sort=createdAt:DESC`);
        if (!isCancelled) {
          setState({
            ...state,
            loading: false,
            data: response.data,
            latestArticle: response.data[0],
          });
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          message: "Error Occurred",
        });
      }
    };

    getData();

    return () => {
      isCancelled = true;
    };
  }, []);
  if (state.message) return <Redirect to="/error" />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="home mt-b">
        {state.latestArticle ? (
          <Link to={`/blog/${state.latestArticle && state.latestArticle._id}`}>
            <div className="banner h-1">
              <div className="banner-cont">
                <p className="banner-text t2">
                  {state.latestArticle && state.latestArticle.Title}
                </p>
                <div className="w-2">
                  <p className="t-3">
                    {state.latestArticle && state.latestArticle.Summary}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="banner h-1">
            <div className="banner-cont">
              <p className="banner-text t2">{"History Diaries Blog"}</p>
              <div className="w-2">
                <p className="t-3">
                  {state.latestArticle && state.latestArticle.Summary}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="blog-list">
          {state.loading ? (
            <div className="center">
              {" "}
              <div className="loader"></div>{" "}
            </div>
          ) : state.data.length > 0 ? (
            <FadeIn>
              {state.data.map((e, i) => (
                <div key={i} className="blog-item">
                  <div className="blog-image">
                    <img
                      className="blog-list-image"
                      src={e.Banner.url}
                      alt={e.Banner.Tittle}
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-list-title">
                      <Link to={`/blog/${e._id}`}>
                        <p>{e.Title}</p>
                      </Link>
                    </div>
                    <div className="blog-list-description">{e.Summary}</div>
                    <div className="blog-list-date mt-1">
                      <i className="fa fa-clock m-a" aria-hidden="true"></i>
                      &nbsp;&nbsp;
                      <div>{format(new Date(e.createdAt), "do MMM yyyy")}</div>
                      &nbsp;&nbsp;
                      <div>{format(new Date(e.createdAt), "HH:MM:aaaa")}</div>
                    </div>
                  </div>
                </div>
              ))}
            </FadeIn>
          ) : (
            <div className="icon-manage">
              <div>
                <img className="empty" src={Sandbox} alt="empty" />
              </div>

              <div className="mt-2">
                <p>No articles published.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;
