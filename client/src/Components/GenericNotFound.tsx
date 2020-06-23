import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const GenericNotFound = (props: Props) => {
  return (
    <div>
      <div className="loading-screen">
        <div className="loader-holder x center">
          <div>
            <h1 className="error-title">404 Error / Page Not Found</h1>
          </div>
          <div>
            <Link to="/" className="c-btn mt-5">
              Go Home Kid
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericNotFound;
