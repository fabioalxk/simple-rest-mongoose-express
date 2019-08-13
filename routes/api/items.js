const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

// list all items
router.get("/", (req, res) => {
  Item.find()
    .then(items => {
      res.json(items);
    })
    .catch(err => res.status(400).json(err));
});

// add new item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem
    .save()
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json(err));
});

// delete an item
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item
        .remove()
        .then(() => res.json({ success: true }))
        .catch(err => console.log(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
