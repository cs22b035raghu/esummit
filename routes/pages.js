const express = require("express");
const path = require("path");

const router = express.Router();

// Helper function to send HTML files
const sendPage = (res, fileName) => {
  res.sendFile(path.join(__dirname, "..", "public", fileName));
};

// Home
router.get("/", (req, res) => {
  sendPage(res, "index.html");
});

// About
router.get("/about", (req, res) => {
  sendPage(res, "about.html");
});

// Events
router.get("/events", (req, res) => {
  sendPage(res, "events.html");
});

// Speakers
router.get("/speakers", (req, res) => {
  sendPage(res, "speakers.html");
});

// Contact
router.get("/contact", (req, res) => {
  sendPage(res, "contact.html");
});

router.get("/Hackathons",(req,res)=>{
  sendPage(res,"hackathon.html");
});

// 404 fallback
router.use((req, res) => {
  res.status(404).send("<h1>404 | Page Not Found</h1>");
});


module.exports = router;
