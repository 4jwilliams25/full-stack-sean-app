const express = require("express");
const app = express();
// Cors needs to be the top middleware
const cors = require("cors");
const bodyParser = require("body-parser");

// process.env.PORT just tells the server to use either whatever port is assigned during deployment or 8000
const port = process.env.PORT || 8000;

// activate middleware
app.use(cors);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));
