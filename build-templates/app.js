const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.static("web-mobile"));
const key = fs.readFileSync("key.pem", "utf-8");
const cert = fs.readFileSync("cert.pem", "utf-8");

app.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

https.createServer({ key, cert }, app).listen(port);
