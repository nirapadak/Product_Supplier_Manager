

const {readdirSync} = require('fs');

const express = require('express');
const app = express();

const morgan = require('morgan');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const mongoSanitize = require('express-mongo-sanitize');
// const rateLimit = require('express-rate-limit');
const cors = require('cors');
require('dotenv').config();


const Port = process.env.PORT || 5000;

app.use(express())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
// app.use(mongoSanitize());
// app.use(limiter);



readdirSync('./src/routes').map((file) => app.use('/api/v1', require(`./src/routes/${file}`)));


mongoose
  .connect(process.env.DATA_PATH)
  .then(() => {
    console.log(`database Connection established successful`);
  })
  .catch((error)=>{console.log(error);})



app.use("/", (req, res) => {
  res.status(404).json({
    error: "not found",
    "massage": "UnAuthorized Request"
  });
})





app.listen(Port, () => {
  console.log(`Application listening on Port localhost:/${Port}`);
})
