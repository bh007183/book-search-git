import React, {useState, useEffect} from "react";
import Results from "../results"
import Axios from "axios"
import API from "../api"


export default function Search() {
  const [books, setBooks] = useState({
    search: "",
    results: []
  });


  const handleInputeChange = event => {
      let value = event.target.value;
      let name = event.target.name;

      setBooks({
         ...books, [name]:value
      })
      
  }

 const handleSubmit = event => {
     event.preventDefault()
    API.searchBooks(books.search).then(res => {if(res.status === 200){
        setBooks({
            ...books, results: res.data.items, search: ""
        })
        console.log(res.data.items)
    }})

 }
  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel teal">
            <span className="white-text">
              <form>
                  <input name="search" value={books.search} onChange={handleInputeChange} placeholder="Search Books"></input>
                  <button onClick={handleSubmit}>Search</button>
              </form>
            </span>
          </div>
        </div>
      </div>
      {!books.results.length ? (<h1 className="text-center">No Books to Display</h1>) : (books.results.map(obj => 
      
        <Results 
        key={obj.id}
        id={obj.id}
        title={obj.volumeInfo.title}
        authors={obj.volumeInfo.authors}
        description={obj.volumeInfo.description}
        link={obj.selfLink}
        // image={obj.volumeInfo.imageLinks.smallThumbnail || null}
        />
      
))}
    </div>

  );
}
