import React from "react";

export default function Results(props) {
  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
            <h5>title</h5>
            <h6>author</h6>
            <button style={{float: "right"}}>Save</button>
          <div className="card-panel teal">
            <span className="white-text">
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
