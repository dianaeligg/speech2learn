const words = require("../db/words");

module.exports = {
  word: function (req, res) {
    const word = words[Math.floor(Math.random() * words.length)];
    return res.json({ word });
  },
};
