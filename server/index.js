const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
const port = process.env.PORT || 3001;

const apiRouter = require("./routes/api");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Routes
app.use("/api", apiRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));