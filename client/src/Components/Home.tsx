import React from "react";
import Rellax from "rellax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ReactGA from "react-ga";
import Vision from "../Assets/Images/idea.svg";
import Mission from "../Assets/Images/goal.svg";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Scroll from "../Assets/Images/heart.svg";
import Partners from "./Partners";
import MediaMentions from "./MediaMentions";

interface Props {}

const Home = (props: Props) => {
  ReactGA.event({
    category: "USER",
    action: "AT HOME",
  });
  ReactGA.pageview("/homepage");
  const [showModal, setModal] = React.useState(false);
  const handleScrollerClick = () => {
    window.scrollTo(500, 850);
  };
  React.useEffect(() => {
    var rellax = new Rellax(".rellax");
  }, []);
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
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="rellax no-mobile circle" data-rellax-speed="7"></div>
        <div className="home">
          <div className="banner">
            <div className="banner-cont">
              <p className="banner-text">
                "History Diaries" is an initiative to revamp the current
                pedagogical system of history through theatre, classroom
                investigative sessions, tours, drama.
              </p>
              <div className="center">
                <div className="c-btn">
                  <Link
                    onClick={() => {
                      ReactGA.event({
                        category: "Home Upcomming Events",
                        action:
                          "User pressed upcomming events button in home page",
                      });
                    }}
                    className="c-white "
                    to="/programs"
                  >
                    Upcoming Events
                  </Link>
                </div>
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
                    <p className="heading-4 cen">
                      “Building compassionate generations by connecting self to
                      history”
                    </p>
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
                    <p className="heading-4 cen">
                      {" "}
                      “Making history Interesting, Engaging and Relevant”
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="our-story">
          <div className="center">
            <p className="heading ft-size-2 noborder">Our Story</p>
          </div>
          <div className="our-story">
            <div className="s-image">
              <img className="story-icon" src={Scroll} alt="story-icon" />
            </div>
            <div className="story-content">
              <p className="c-grey mt-2">
                Our journey started after having a small discussion with an 8th
                grader who said, History is one subject that he hates but on the
                contrary he likes watching history-based movies, listening to
                stories of the past, exploring monuments and getting exposed to
                cultural content. We could relate to him as we had felt the same
                when we were in school. We felt the disconnect between what a
                child reads in books and what the child experiences. To bridge
                this gap and make History{" "}
                <strong className="strong">Interesting</strong> and{" "}
                <strong className="strong">Experiential</strong> for students we
                came up with a history-curriculum based Theatre where we pick a
                theme from their history curriculum and make a theatre play
                around it. Since our foundation, we have staged 6 plays for
                schools in Delhi-NCR.
                <br />
                <br />
                But making history interesting out of the classroom wasn’t
                enough. We wanted to take this impact to the classrooms so that
                it could be sustained. And we started using Drama-In-History
                -Education to build classroom sessions. This helped us catching
                student attention in the classroom and make this subject
                Engaging for students. Not just the in-class sessions but,
                engaging with the primary evidence of past which are
                well-preserved in the museums, helped them engage with their
                subject better.
                <br />
                <br />
                Still making history Interesting and{" "}
                <strong className="strong">Engaging</strong>&nbsp;wasn’t enough
                as there was this question of “Why study history ?” in minds of
                students. They used to ask us about the relevance of studying
                history which raised a lot of unanswered questions in our minds.
                We started our research to connect all these dots and worked
                around the “Thinking” that the study of history develops that
                doesn’t only define what’s significant to look into the past but
                also, ‘How’ to look at it. It talks about Evidence Vs
                Interpretations, Contextualisation, Multiple Perspectives,
                Changes and Continuities, and forming Judgements. The thinking
                skills, which are highly relevant to resolve the matters of the
                present society. Hence, we started working with school students
                and teachers, developing these skills through research-based
                history projects. And it helped us achieving the third paradigm
                of making history <strong className="strong">Relevant</strong>{" "}
                in schools.
              </p>
            </div>
          </div>
        </div>
        <div id="our-impact" className="data-section">
          <div className="center">
            <p className="heading ft-size-2 noborder">Our Impact</p>
          </div>
          <div className="data-row">
            <div className="data-cont">
              <div className="data">4500+</div>
              <div>
                <p className="sub-data">Students</p>
              </div>
            </div>
            <div className="data-cont">
              <div className="data">150+</div>
              <div>
                <p className="sub-data">Teachers</p>
              </div>
            </div>

            <div className="data-cont">
              <div className="data">25+</div>
              <div>
                <p className="sub-data">Schools</p>
              </div>
            </div>
            <div className="data-cont">
              <div className="data">30+</div>
              <div>
                <p className="sub-data">Events</p>
              </div>
            </div>
          </div>
        </div>
        <div id="core-team" className="team-section">
          <div className="center">
            <p className="heading color-white">Core Team</p>
          </div>
          <div className="team-profile">
            {team.map((p, index) => (
              <div key={index} className="team-mate">
                <div className="team-image">
                  <img
                    onClick={() => {
                      setModal(true);
                    }}
                    className="team-image"
                    src="https://via.placeholder.com/150"
                    alt="person"
                  />
                </div>
                <div>
                  <p className="mt-1">Person {index + 1}</p>
                </div>

                <Modal
                  ariaHideApp={false}
                  isOpen={showModal}
                  contentLabel="Modal"
                >
                  <div className="modal-cont">
                    <div className="right-push">
                      <div
                        className="c-btn trim cross"
                        onClick={() => setModal(false)}
                      >
                        ×
                      </div>
                    </div>
                    <p className="heading-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p className="c-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab corrupti, perferendis dolorum obcaecati, ipsam autem
                    </p>
                  </div>
                </Modal>
              </div>
            ))}
          </div>
        </div>

        <div id="testimonials" className="t-section">
          <div className="center">
            <p className="heading ft-size-2 noborder">Testimonials</p>
          </div>
          <Testimonial />
        </div>
        <div className="p-section">
          <div className="center">
            <p className="heading ft-size-2 noborder">Partners</p>
          </div>
          <Partners />
        </div>
      </motion.div>
      <div className="center lk">
        <p className="heading ft-size-2 noborder">Media Mention</p>
      </div>
      <div className="center">
        <div className="media-sec">
          <MediaMentions />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
