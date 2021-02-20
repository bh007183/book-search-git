import React from "react";

export default function SavedCard(props) {


  const viewInfo = () => {
    console.log(props.link)
    let url = props.link
    window.location.href = url
  }


  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel teal">
          <h4>{props.title}</h4>
          <h5>{props.author}</h5>
          <img src={props.image} />
          <span className="white-text">{props.description}</span>
          <button onClick={viewInfo}>Info</button>
        </div>
      </div>
    </div>
  );
}
