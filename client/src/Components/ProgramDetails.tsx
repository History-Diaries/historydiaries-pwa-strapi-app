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
interface Istate {
  data: any;
  loading: boolean;
}
const value = `# Demo

Line 1${"  "}
Line 2${"  "}
Line 3
`;
const source = value;

type TParams = { id: string; program: string };
const ProgramDetails = ({ match }: RouteComponentProps<TParams>) => {
  const program = match.params.program;
  const id = match.params.id;

  console.log(program, id);
  const [state, setState] = React.useState<Istate>({
    data: null,
    loading: true,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const response = await axios.get(`${API}/${program}/${id}`);

      console.log(response);

      setState({
        ...state,
        data: response.data,
        loading: false,
      });
    };

    fetchData();
  }, []);

  const handleRegister = (link: any) => {
    window.open(link);
  };

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
                  <p className="c-grey-m">26 June, 2020</p>
                </div>
                <div className="e-item">
                  <p className="t-def">Deadline</p>
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
