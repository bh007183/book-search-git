import React from "react";

export default function Results(props) {
  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
            <h5>{props.title}</h5>
            {props.authors.map((item, index) => <h6 key={index}>{item}</h6>)}
            <button style={{float: "right"}}>Save</button>
          <div className="card-panel teal">
            <span className="white-text">
             {props.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
