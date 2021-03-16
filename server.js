const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://UserName:test@cluster0.s7upg.mongodb.net/NotesDB", { useNewUrlParser: true },{ useUnifiedTopology: true })
// set this Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//schema
const notesSchema={
    name: String,
    content: String
}

const Note = mongoose.model("Note",notesSchema);

app.get("/", function(req,res){
    res.sendFile(__dirname+"/client.html")
})

app.post("/", function(req,res){
    let newNote = new Note({
      name: req.body.name,
      content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})
app.listen(3000, function(){
  console.log("server is running 3000");  
})