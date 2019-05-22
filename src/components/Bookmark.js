import React from "react";

const Bookmark = props => {
  return (
    <React.Fragment>
      <li>
        <div className="tooltip">
          Hover over me
          <span className="tooltiptext"> {props.dis}</span>
        </div>
        <a href={props.url} target="_blank">
          <span className="dot" />
        </a>
        <br />
        <span className="title">{props.title}</span>
      </li>
    </React.Fragment>
  );
};

export default Bookmark;
