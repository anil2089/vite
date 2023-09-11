import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// New test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
