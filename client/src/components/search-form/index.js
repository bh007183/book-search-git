import React, {useState, useEffect} from "react";
import Results from "../results"


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



  return (
    <div>
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel teal">
            <span className="white-text">
              <form>
                  <input name="search" value={books.search} onChange={handleInputeChange} placeholder="Search Books"></input>
                  <button>Search</button>
              </form>
            </span>
          </div>
        </div>
      </div>
      {books.results.map(obj =>
        <Results/>
        
        )}
      <Results/>
    </div>

  );
}
