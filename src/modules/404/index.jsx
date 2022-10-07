import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { WEB_STRINGS } from "../../constants";
const Error = () => {
  const {ERRORPAGE} = WEB_STRINGS
  return (
    <>
      <div className="Error">
        <div className="content">
          <h2>{ERRORPAGE.TITLE}</h2>
          <h4>{ERRORPAGE.SUBTITLE}</h4>
          <p>
            {ERRORPAGE.DESCRIPTION}
          </p>
          <Link to="/" className="ripple">
            {ERRORPAGE.BUTTON}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
