//---Dependencies---//
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//---Middleware---//
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//---Routes---//
// app.use("/", htmlRoutes);
// app.use("/api", apiRoutes);

//---Server Listener---//
app.listen(PORT, function () {
  console.log("The API is running on port " + PORT);
});
