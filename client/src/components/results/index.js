import React from "react";
import API from "../api"
import axios from "axios"
import {Link} from "react-router-dom"

export default function Results(props) {

     

const saveBook = event => {
 const author = props.authors.toString()
console.log(author)
  
axios.post("/api/book",{
    title: props.title,
        author: author,
        description: props.description,
        image: props.image,
        link: props.link
}).then(res => {
    console.log(res)
})


}

const viewInfo = () => {
  console.log(props.link)
  let url = props.link
  window.location.href = url
}

  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
            <h5>{props.title}</h5>
            {!props.authors ? (<p>No authors</p>):(
            props.authors.map((item, index) => <h6 key={index}>{item}</h6>))}
            <button onClick={saveBook} data-id={props.id} style={{float: "right"}}>Save</button>
            
            <button onClick={viewInfo} style={{float: "right"}}>Info</button>
            
            <img src={props.image}></img>
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
