require("dotenv").config();

const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const router  = require("./routes/url");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB connected")).catch(err => console.log("MongoDB Error", err))


//Views
app.set("view engine", "ejs");
app.set("views",  path.resolve("./views"));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

//Routes
app.use("/", router);


//Static
app.use(express.static(path.join(__dirname, "public")));


const myServer = http.createServer(app);
myServer.listen(port, () => console.log("Server Started !"));
