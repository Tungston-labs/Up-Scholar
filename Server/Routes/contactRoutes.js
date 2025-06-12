const express = require("express");
const { enquiry } = require("../Contoller/contactController");

const router = express.Router();

// This route will handle the enquiry form submission
router.post("/enquiry", enquiry);

module.exports = router;
