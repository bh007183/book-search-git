const router = require("express").Router();
const { json } = require("express");
const db = require("../models")


    router.post("/api/book", (req, res)=>{
        console.log(req.body)
        db.BookDB.create(req.body).then(data => res.json(data))

    })
    router.get("/api/book", (req, res) => {
        db.BookDB.find().then(data => res.json(data))
        
    })

  





module.exports = router