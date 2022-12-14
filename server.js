const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/get", async (req, res) => {
  let api = "https://api.adviceslip.com/advice";
  try {
    let advice = await fetch(api);
    let parsedAdvice = await advice.json();

    let sendAdvice = parsedAdvice.slip;
    res.status(200).json(sendAdvice);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res
      .status(500)
      .send({ message: error.message, err: "something went wrong" });
  }
});
app.get("/", (req, res) => {
  console.log("Homepage ");
  res.send("Welcome to this API");
});

app.listen(port, (err) => {
  if (err) {
    console.log("server failed");
    return;
  }
  console.log(`server listening at http://localhost:${port}`);
});
