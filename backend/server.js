const path = require("path");
const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", 'index.html'));
});

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(
  PORT,
	console.log(`Server running on port ${PORT}`)
);