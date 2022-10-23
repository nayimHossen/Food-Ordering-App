const express = require("express");
const connectDatabase = require("./dbConaction.js");
require("dotenv").config({ path: "backend/.env" });
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (error) => {
  console.log(error.message);
  console.log(`shutting down the server dut to uncaughtException`);

  process.exit(1);
});

//DATABASE CONNECTION
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//IMPORT ALL ROUTE
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

//CREATE ALL ROUTE
app.use("/api/v1", productRoute, userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", (error) => {
  console.log(error.message);
  console.log(`shutting down the server dut to unhandledRejection`);

  server.close(() => {
    process.exit(1);
  });
});
