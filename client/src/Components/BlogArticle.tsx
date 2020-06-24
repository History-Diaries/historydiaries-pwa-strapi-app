import React from "react";
import Footer from "./Footer";
import { Link, RouteChildrenProps, Redirect } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { API } from "../config";
import { stat } from "fs";
import { format } from "date-fns";
interface Istate {
  data: any;
  loading: boolean;
  notFound: boolean;
}
type TParams = { id: string };
const BlogArticle = ({ match }: RouteChildrenProps<TParams>) => {
  let isCancelled = false;
  const id = match?.params.id;

  const [state, setState] = React.useState<Istate>({
    data: null,
    loading: true,
    notFound: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    const getData = async () => {
      try {
        const response = await axios.get(`${API}/blogs/${id}`);

        if (!isCancelled) {
          setState({
            ...state,
            loading: false,
            data: response.data,
          });
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          notFound: true,
        });
      }
    };

    getData();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (state.notFound) return <Redirect to="/error" />;
  return (
    <div>
      <div></div>
      {state.loading ? (
        <div className="loading-screen">
          <div className="loader-holder">
            <div className="loader"></div>
          </div>
        </div>
      ) : state.data ? (
        <>
          {" "}
          <div className="home">
            <div className="center">
              <LazyLoadImage
                alt={"blog"}
                effect="blur"
                className="banner mod no-shadow"
                src={state.data.Banner.url} // use normal <img> attributes as props
              />
            </div>
            <div className="blog-title">
              <p>{state.data.Title}</p>
            </div>
            <div className="date center mt-1">
              <i className="fa fa-calendar m-a" aria-hidden="true"></i> &nbsp;
              &nbsp;
              <p>
                {format(
                  new Date(state.data.createdAt),
                  "do MMM yyyy HH:MM:aaaa"
                )}
              </p>
            </div>
            <div className="blog-content-2">
              <ReactMarkdown
                className="reactMarkdown  "
                source={state.data.Content}
              />
            </div>
          </div>
          <div className="center">
            <div className="more-article">
              <div>
                <Link to="/blog" className="ma-btn">
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No article found</p>
      )}
      <Footer />
    </div>
  );
};

export default BlogArticle;
