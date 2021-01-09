const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function (err) {
  if (err) {
    console.log(`Error running the server: ${err}`);
    return;
  }
  console.log(`Server is up and running in port : ${port}`);
});
