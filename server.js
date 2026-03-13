import axios from "axios";
import express from "express";
import path from "path";

const app = express();
const port = 3000;

const randomFact = axios.create({
  baseURL: "https://uselessfacts.jsph.pl",
});

const __dirname = import.meta.dirname;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await randomFact.get("/api/v2/facts/random");

    res.send({ fact: response.data.text });
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "Could not fetch fun fact" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
