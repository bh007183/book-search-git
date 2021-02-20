import SavedCard from "../../components/savedcards";
import React, { useState, useEffect } from "react";
import API from "../../components/api";

export default function Saved() {
  const [savedBooks, setSavedBooks] = useState({
    savedResults: [],
  });

  useEffect(() => {
    API.savedBooks().then((res) => {setSavedBooks({ savedResults: res.data }); console.log(res.data)});
    
  }, []);

  return (
    <>
      {savedBooks.savedResults.map((item) => (
        <SavedCard
          key={item._id}
          title={item.title}
          author={item.author}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </>
  );
}
