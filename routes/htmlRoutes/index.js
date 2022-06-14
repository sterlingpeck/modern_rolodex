const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.issueFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/rolodex", (req, res) => {
  res.issueFile(path.join(__dirname, "../../public/rolodex.html"));
});

module.exports = router;
