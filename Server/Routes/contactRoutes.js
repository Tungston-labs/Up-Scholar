const express = require("express");
const { enquiry } = require("../Contoller/contactController");

const router = express.Router();


router.post("/enquiry", enquiry);


module.exports = router;
