import React from "react";
import Empty from "../Assets/Images/amusement-park.svg";
interface Props {}

const Partners = (props: Props) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="partner-list">
      {list.map((e, i) => (
        <div key={i}>
          <img src={Empty} className="partner-image" alt="a" />
        </div>
      ))}
    </div>
  );
};

export default Partners;
