const notes = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const dataBase = require("../db/db.json");

notes.get("/notes", (req, res) => {
  res.json(dataBase);
});

notes.post("/notes", (req, res) => {
  let addNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dataBase.push(addNote);
  fs.writeFileSync("../db/db.json", JSON.stringify(dataBase));
  res.json(dataBase);
});

module.exports = notes;
