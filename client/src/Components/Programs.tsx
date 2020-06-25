import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import FadeIn from "react-fade-in";
import Empty from "../Assets/Images/amusement-park.svg";
import { API } from "../config";

interface Props {}
interface Istate {
  workshops: Array<object>;
  courses: Array<object>;
  contests: Array<object>;
  theaters: Array<object>;
  loading: boolean;
  message: string;
  latestBanner: any;
  current: string;
}
const PastPrograms = (props: Props) => {
  let isCancelled = false;

  const [state, setState] = React.useState<Istate>({
    workshops: [],
    courses: [],
    contests: [],
    theaters: [],
    loading: true,
    message: "",
    latestBanner: null,
    current: "Workshops",
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const workshops = axios.get(`${API}/workshops?_sort=date:DESC`);
      const courses = axios.get(`${API}/courses?_sort=date:DESC`);
      const contests = axios.get(`${API}/contests?_sort=date:DESC`);
      const theater = axios.get(`${API}/theaters?_sort=date:DESC`);

      try {
        const res = await axios.all([workshops, courses, contests, theater]);
        if (!isCancelled) {
          setState({
            ...state,
            workshops: res[0].data,
            courses: res[1].data,
            contests: res[2].data,
            theaters: res[3].data,
            latestBanner: res[0].data.length > 0 ? res[0].data[0] : null,
            loading: false,
          });
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          message: "Fetch Failed",
        });
      }
    };

    fetchData();
    return () => {
      isCancelled = true;
    };
  }, []);

  const itemRef = React.useRef(null);
  const [items, setItems] = React.useState({
    list: [
      {
        name: "Workshops",
        state: true,
      },
      {
        name: "Theaters",
        state: false,
      },
      {
        name: "Contests",
        state: false,
      },
      {
        name: "Courses",
        state: false,
      },
    ],
  });

  const handleItemClick = (index: number) => {
    const dupList = items.list;
    dupList.map((e) => (e.state = false));
    dupList[index].state = true;

    setItems({
      list: dupList,
    });

    if (dupList[index].name === "Workshops") {
      setState({
        ...state,
        current: "Workshops",
        latestBanner: state.workshops.length > 0 ? state.workshops[0] : null,
      });
    }
    if (dupList[index].name === "Contests") {
      setState({
        ...state,
        current: "Contests",
        latestBanner: state.contests.length > 0 ? state.contests[0] : null,
      });
    }
    if (dupList[index].name === "Courses") {
      setState({
        ...state,
        current: "Courses",
        latestBanner: state.courses.length > 0 ? state.courses[0] : null,
      });
    }
    if (dupList[index].name === "Theaters") {
      setState({
        ...state,
        current: "Theaters",
        latestBanner: state.theaters.length > 0 ? state.theaters[0] : null,
      });
    }
  };

  const EventCard = (data: any, type: string) => {
    return (
      <div key={data._id} className="e-card">
        <div className="e-card-sec1">
          <div>
            <img
              className="event-image"
              src={data.Banner.url}
              alt={data.Title}
            />
          </div>
          <p className="card-title">{data.Title}</p>
          <p className="card-details">{data.Summary}</p>
        </div>
        <div className="e-card-sec-2">
          <div className="btn-cont">
            <div className="view-more-btn">
              <Link to={`/program/${type}/${data._id}`}>View more.</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const workshop = () => {
    return (
      <>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.workshops.length > 0 ? (
          state.workshops.map((e, i) => EventCard(e, "workshops"))
        ) : (
          <div className="icon-manage">
            <div>
              <img className="empty" src={Empty} alt="empty" />
            </div>

            <div className="mt-2">
              <p>No workshops. Check again later</p>
            </div>
          </div>
        )}
      </>
    );
  };
  const course = () => {
    return (
      <>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.courses.length > 0 ? (
          state.courses.map((e, i) => EventCard(e, "courses"))
        ) : (
          <div className="icon-manage">
            <div>
              <img className="empty" src={Empty} alt="empty" />
            </div>

            <div className="mt-2">
              <p>No courses. Check again later</p>
            </div>
          </div>
        )}
      </>
    );
  };
  const contest = () => {
    return (
      <>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.contests.length > 0 ? (
          state.contests.map((e, i) => EventCard(e, "contests"))
        ) : (
          <div className="icon-manage">
            <div>
              <img className="empty" src={Empty} alt="empty" />
            </div>

            <div className="mt-2">
              <p>No contests. Check again later</p>
            </div>
          </div>
        )}
      </>
    );
  };
  const theater = () => {
    return (
      <>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.theaters.length > 0 ? (
          state.theaters.map((e, i) => EventCard(e, "theaters"))
        ) : (
          <div className="icon-manage">
            <div>
              <img className="empty" src={Empty} alt="empty" />
            </div>

            <div className="mt-2">
              <p>No theaters. Check again later</p>
            </div>
          </div>
        )}
      </>
    );
  };

  const switchRenderer = (current: string) => {
    switch (current) {
      case "Workshops":
        return workshop();
      case "Theaters":
        return theater();
      case "Courses":
        return course();
      case "Contests":
        return contest();
      default:
        return <Redirect to="/error" />;
    }
  };

  if (state.message) return <Redirect to="/error" />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <p className="heading-3 roll no-desktop">Programs</p>
      <div className="e-container">
        <div className="card-dialouge">
          <div className="list-items">
            {items.list.map((e, i) => (
              <div
                ref={itemRef}
                onClick={() => handleItemClick(i)}
                key={i}
                className={e.state ? "e-item e-active" : "e-item"}
              >
                {e.name}
              </div>
            ))}
          </div>
          <div className="no-mobile e-banner">
            {state.latestBanner ? (
              <FadeIn>
                <Link
                  to={`/program/${state.current}/${state.latestBanner._id}`}
                >
                  <div className="cont-holder">
                    <h1 className="white mb-1">{state.latestBanner.Title}</h1>
                    <p>{state.latestBanner.Summary}</p>
                  </div>
                </Link>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="cont-holder">
                  <h1 className="white">Programs</h1>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
        <div className="center">
          <FadeIn>
            <div className="heading-2 mt-3">{state.current}</div>
          </FadeIn>
        </div>
      </div>
      <div className="card-holder">{switchRenderer(state.current)}</div>
      <Footer />
    </motion.div>
  );
};

export default PastPrograms;
