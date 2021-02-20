import React from "react";
import API from "../api"
import axios from "axios"

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


  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
            <h5>{props.title}</h5>
            {props.authors.map((item, index) => <h6 key={index}>{item}</h6>)}
            <button onClick={saveBook} data-id={props.id} style={{float: "right"}}>Save</button>
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
