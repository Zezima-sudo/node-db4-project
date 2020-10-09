const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(r => {
      res.status(200).json(r);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      if (list.length) {
        res.status(200).json(list);
      } else {
        res.status(404).json({ message: "that ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(steps => {
      if (steps) {
        res.status(200).json(steps);
      } else {
        res.status(404).json({ message: "that ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

module.exports = router;