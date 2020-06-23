import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { API } from "../config";

interface Props {}
interface Istate {
  workshops: Array<object>;
  courses: Array<object>;
  contests: Array<object>;
  theaters: Array<object>;
  loading: boolean;
}
const PastPrograms = (props: Props) => {
  const [state, setState] = React.useState<Istate>({
    workshops: [],
    courses: [],
    contests: [],
    theaters: [],
    loading: true,
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const workshops = axios.get(`${API}/workshops`);
      const courses = axios.get(`${API}/courses`);
      const contests = axios.get(`${API}/contests`);
      const theater = axios.get(`${API}/theaters`);

      const res = await axios.all([workshops, courses, contests, theater]);

      setState({
        ...state,
        workshops: res[0].data,
        courses: res[1].data,
        contests: res[2].data,
        theaters: res[3].data,
        loading: false,
      });
    };

    fetchData();
  }, []);

  console.log(state);
  const itemRef = React.useRef(null);
  const [current, setCurrent] = React.useState("Workshops");
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
    setCurrent(dupList[index].name);

    setItems({
      list: dupList,
    });
  };

  const EventCard = (data: any, type: string) => {
    return (
      <div key={data._id}>
        <div className="e-card">
          <div>
            <img
              className="event-image"
              src="https://via.placeholder.com/150"
              alt={data.Title}
            />
          </div>
          <p className="card-title">{data.Title}</p>
          <p className="card-details">{data.Summary}</p>
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
      <div>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.workshops.length > 0 ? (
          state.workshops.map((e, i) => EventCard(e, "workshops"))
        ) : (
          <p>No workshops. check again later</p>
        )}
      </div>
    );
  };
  const course = () => {
    return (
      <div>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.courses.length > 0 ? (
          state.courses.map((e, i) => EventCard(e, "courses"))
        ) : (
          <p>No courses. check again later</p>
        )}
      </div>
    );
  };
  const contest = () => {
    return (
      <div>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.contests.length > 0 ? (
          state.contests.map((e, i) => EventCard(e, "contests"))
        ) : (
          <p>No contests. check again later</p>
        )}
      </div>
    );
  };
  const theater = () => {
    return (
      <div>
        {state.loading ? (
          <div className="loader"></div>
        ) : state.theaters.length > 0 ? (
          state.theaters.map((e, i) => EventCard(e, "theaters"))
        ) : (
          <p>No theaters. check again later</p>
        )}
      </div>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <p className="heading-3 roll no-desktop">Past Programs</p>
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
            <h1 className="white">Programs</h1>
          </div>
        </div>
        <div className="center">
          <div className="heading-2 mt-3">{current}</div>
        </div>
      </div>
      <div className="card-holder">{switchRenderer(current)}</div>
      <Footer />
    </motion.div>
  );
};

export default PastPrograms;
