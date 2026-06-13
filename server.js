const express = require("express");
const path = require("path");

const app = express();

// public serve
app.use(express.static(path.join(__dirname, "public")));

// DIRECT JSON FILE (NO API CONFUSION)
app.get("/channels.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "channels.json"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
