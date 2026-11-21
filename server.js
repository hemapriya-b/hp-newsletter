const express = require("express");
const path = require("path");

const articleRoutes = require("./backend/routes/articleRoutes");
const adminRoutes = require("./backend/routes/adminRoutes");
const authRoutes = require("./backend/routes/authRoutes");
const homeRoutes = require("./backend/routes/homeRoutes");

const app = express();

app.use(express.json());

// Local static-file support; Vercel serves public/ through its CDN.
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/articles", articleRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);

app.use("/api", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

module.exports = app;
