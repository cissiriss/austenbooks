/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
// app.use(express.static("public"));

const reviewRoutes = require('./routes/reviewRoutes')

app.use(reviewRoutes);
const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.listen(port, () => console.log(`example app is listening on port ${port}`))