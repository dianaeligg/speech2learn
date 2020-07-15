const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const wordController = require("../controllers/wordController");

// API Routes
// router.use("/api", apiRoutes)(router);

router.route("/api/word").get(wordController.word);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
