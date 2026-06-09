const express = require("express");

const app = express();

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(
    `[${req.method}] ${req.url} - ${new Date().toLocaleTimeString()}`,
  );
  next();
});

// Routes
const postRoutes = require("./routes/postRoutes");

app.use("/posts", postRoutes);

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }

  res.json({
    message: "Login successful",
    username,
    token: "mock-jwt-token-123",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
