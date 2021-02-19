import React from 'react'
import axios from "axios"

export default{

    searchBooks: function (book){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + book)
        
    },
    savedBooks: function (){
      return axios.get("/api/book")
    }
    
}
