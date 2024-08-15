const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("node:path");
const appRoutes = require("./routes/appRouter");
const assetsPath = path.join(__dirname, "public");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to connect to the database. Server not started.",
      error
    );
  });

app.use("/", appRoutes);
