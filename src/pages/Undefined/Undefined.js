import React from "react";
import "./Undefined.css";

const Undefined = () => {
  return (
    <div className="undefined">
      <h1 className="error">404. That`s an error.</h1>
      <p>
        The requested URL
        <br />
        /badpage was not found on
        <br />
        this server. That`s all we know.
      </p>
    </div>
  );
};

export default Undefined;
