import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    name: "kiran",
    profession: "Web developer",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
