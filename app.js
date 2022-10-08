const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

const addingDate = app.get("/", (request, response) => {
  const date = new Date();
  const addDate = addDays(date, 100);
  response.send(
    `${addDate.getDate()}/${addDate.getMonth() + 1}/${addDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = addingDate;
