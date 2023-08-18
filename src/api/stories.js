const express = require("express");
const router = express.Router();
const stories = require("./storyapi.json");

router.get("/", (req, res) => {
  res.json(stories);
});

router.get("category/:categories", (req, res) => {
  const { categories } = req.params;
  console.log("Requested category:", categories);

  const storiesInCategory = stories.filter(story => story.categories === categories);
 

  if (storiesInCategory.length > 0) {
    res.json(storiesInCategory);
  } else {
    res.status(404).json({ message: "Stories not found in this category" });
  }
});

router.get("/:story_title", (req, res) => {
  const { story_title } = req.params;
  const story = stories.find((story) => story.story_title === story_title);
  if (story) {
    res.json(story);
  } else {
    res.status(404).json({ message: "Story not found" });
  }
});

module.exports = router;
