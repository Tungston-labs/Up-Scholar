require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./Routes/contactRoutes"); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/welcome", (req, res) => {
    res.send("Welcome to the server");
});

// Contact form route
app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});