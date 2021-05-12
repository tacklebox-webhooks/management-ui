const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");

app.use(express.static("build"));
app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
app.listen(port, () => {
  console.log(`View your admin dashboard at http://localhost:${port}`);
});
