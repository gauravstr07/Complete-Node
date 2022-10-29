const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://gauravstr2680:Akshu2680@cluster0.ofgxs2y.mongodb.net/?retryWrites=true&w=complete-nodejs",
    {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    }
  )
  .then(() => {
    console.log(`connected to database 🔥`);
  })
  .catch((err) => {
    console.log("something went wrong 🤔");
  });

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
