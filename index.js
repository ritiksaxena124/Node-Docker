const express = require("express");

const app = express();

let port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.write("<h1>Hey There!!</h1>")
    res.end();
})

app.listen(port, () => {
  console.log(`listening at https://localhost:${port}`);
});
