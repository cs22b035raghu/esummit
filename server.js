const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
const pagesRouter = require("./routes/pages");
app.use("/", pagesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 E-Summit server running at http://localhost:${PORT}`);
});
