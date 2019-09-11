const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err));

// Comment 1
app.use("/api/items", require("./routes/api/items"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
