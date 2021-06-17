const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const { PORT, DB_URL, SERVER } = require("./config/index");
const { success, error, info } = require("consola");

let app = express();

//middlewares
app.use(cors());
app.use(express.json());

//?load routes here
app.use("/api", require("./routes/employee"));

//*  server starting
let startApp = async () => {
  try {
    await connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    success({ message: `db connected`, badge: true });
    app.listen(PORT, (err) => {
      if (err) {
        error({ message: `err`, badge: true });
      } else {
        success({ message: `server at${PORT}`, badge: true });
      }
    });
  } catch (err) {
    error({ message: `unable to connect to db`, badge: true });
  }
};
startApp();
