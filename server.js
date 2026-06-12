const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// channels API (optional future use)
const channels = require("./channels.json");
app.get("/api/channels", (req, res) => {
  res.json(channels);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
