const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(request);
  response.send({ hello: "world!" });
});

app.listen(5000, () => {
  console.log("Now listening @ localhost:5000");
});
