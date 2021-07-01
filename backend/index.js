const express = require("express");
const routes = require("./src/routes/index");

require("./src/database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Listem port 3333");
});
