const express = require("express");
const app = express();
// Cors needs to be the top middleware
const cors = require("cors");
const bodyParser = require("body-parser");

// process.env.PORT just tells the server to use either whatever port is assigned during deployment or 8000
const port = process.env.PORT || 8000;

// Declare what domains Cors will let your server accept requests from
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

// activate middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/api/message", (req, res) => {
  res.send("Holy Crap I have a server");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
