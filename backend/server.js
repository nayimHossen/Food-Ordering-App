const express = require("express");
const connectDatabase = require("./dbConaction.js");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (error) => {
  console.log(error.message);
  console.log(`shutting down the server dut to uncaughtException`);

  process.exit(1);
});

//CONFIG
dotenv.config({ path: "backend/.env" });

//DATABASE CONNECTION
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//IMPORT ALL ROUTE
const productRoute = require("./routes/productRoute");

//CREATE ALL ROUTE
app.use("/api/v1", productRoute);

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
