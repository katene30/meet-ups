const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const server = express();

server.use(cors("*"));

server.use(passport.initialize());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

server.use("/api/auth", require("./routes/auth"));
server.use("/api/v1/meetups", require("./routes/events"));
server.use("/api/v1/users", require("./routes/users"));
server.use("/api/v1/subscriptions", require("./routes/subscriptions"));

module.exports = server;
