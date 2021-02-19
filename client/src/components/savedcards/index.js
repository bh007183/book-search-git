import React from "react";

export default function SavedCard(props) {
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel teal">
          <h4>{props.title}</h4>
          <h5>{props.author}</h5>
          <img src={props.image} />
          <span className="white-text">{props.description}</span>
          <a href={props.link}>Link</a>
        </div>
      </div>
    </div>
  );
}
