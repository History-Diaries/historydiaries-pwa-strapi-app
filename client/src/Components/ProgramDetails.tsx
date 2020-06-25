import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import YouTube from "react-youtube";
import { BrowserView, MobileView } from "react-device-detect";
import { RouteComponentProps, Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import axios from "axios";
import { API } from "../config";
import Footer from "./Footer";
import { format } from "date-fns";
interface Istate {
  data: any;
  loading: boolean;
  notFound: boolean;
}

type TParams = { id: string; program: string };

const ProgramDetails = ({ match }: RouteComponentProps<TParams>) => {
  let isCancelled = false;
  const program = match.params.program;
  const id = match.params.id;

  const [state, setState] = React.useState<Istate>({
    data: null,
    loading: true,
    notFound: false,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("hey");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/${program}/${id}`);
        console.log(response.data);
        if (!isCancelled) {
          setState({
            ...state,
            data: response.data,
            loading: false,
          });
        }
      } catch (error) {
        if (!isCancelled) {
          setState({
            ...state,
            notFound: true,
            loading: false,
          });
        }
      }
    };
    console.log(state);
    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleRegister = (link: any) => {
    window.open(link);
  };
  if (state.notFound) return <Redirect to="/error" />;
  return (
    <div>
      {state.loading ? (
        <div className="loading-screen">
          <div className="loader-holder">
            <div className="loader"></div>
          </div>
        </div>
      ) : state.data ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="home"
        >
          <div className="center">
            <LazyLoadImage
              alt={state.data.Title}
              effect="blur"
              className="banner mod no-shadow"
              src={state.data.Banner.url} // use normal <img> attributes as props
            />
          </div>
          <div className="event-section">
            <div className="e-sec-1">
              <div className="e-content">
                <p className="heading-4">{state.data.Title}</p>
                <div className="c-grey">
                  <ReactMarkdown
                    className="reactMarkdown"
                    escapeHtml={true}
                    source={state.data.Description}
                    parserOptions={{ commonmark: true }}
                  />

                  <div></div>
                </div>

                {state.data.YoutubeVideoID ? (
                  <div className="video-holder">
                    <BrowserView>
                      <YouTube
                        className="video-i"
                        videoId={state.data.YoutubeVideoID}
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
                        videoId={state.data.YoutubeVideoID}
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
                ) : null}
              </div>
            </div>
            <div className="e-sec-2">
              <div className="e-list">
                <div className="e-item">
                  <p className="t-def">Deadline</p>
                  <p className="c-grey-m">
                    {format(new Date(state.data.Date), "do MMM yyyy")}
                  </p>
                </div>
                <div className="e-item">
                  <p className="t-def">Fee</p>
                  <p className="c-grey-m">
                    {state.data.Fee ? "₹" + state.data.Fee : "Free"}
                  </p>
                </div>

                <div className="e-item">
                  {state.data.RegistrationLink && (
                    <div
                      className="c-btn m-btn spread"
                      onClick={() =>
                        handleRegister(state.data.RegistrationLink)
                      }
                    >
                      Register
                    </div>
                  )}
                </div>
                <br />
                <div className="e-item">
                  <div className="center">
                    <p className="t-def">Expert</p>
                  </div>
                  <div className="mentors">
                    {state.data.Mentor.map((e: any, i: any) => (
                      <div key={i} className="mentor">
                        <div>
                          <img
                            className="mentor-image"
                            src={e.MentorImage.formats.small.url}
                            alt={e.Name}
                          />
                        </div>
                        <div>
                          <p className="mentor-name">{e.Name}</p>
                          <p className="mentor-description">{e.Description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Redirect to="/error" />
      )}

      <Footer />
    </div>
  );
};

export default ProgramDetails;
