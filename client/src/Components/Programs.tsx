import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface Props {}

const PastPrograms = (props: Props) => {
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
  const dummy = [1, 2, 3, 4, 5];

  const EventCard = (index: number) => {
    return (
      <div key={index}>
        <div className="e-card">
          <p className="card-title">Event Name</p>
          <div>
            <img
              className="event-image"
              src="https://via.placeholder.com/150"
              alt="event-img"
            />
          </div>
          <p className="card-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            eos tempore corrupti animi dolor officia quisquam atque vel et
            molestiae nostrum quas veritatis, ea sapiente mollitia adipisci modi
            excepturi?
          </p>
          <div className="btn-cont">
            <div>View more.</div>
          </div>
        </div>
      </div>
    );
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
      <div className="card-holder">{dummy.map((e, i) => EventCard(i))}</div>
      <Footer />
    </motion.div>
  );
};

export default PastPrograms;
