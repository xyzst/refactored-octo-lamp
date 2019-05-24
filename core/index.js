const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  console.log(request);
  response.send({ hello: "world!" });
});

app.listen(PORT, () => {
  console.log(`Now listening @ localhost:${PORT}`);
});
