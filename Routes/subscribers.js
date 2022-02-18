const express = require("express");
const subscriber = require("../Models/subscriber");
const router = express.Router();
const subscriber = require("../Models/subscriber");

//GETTING ALL SUBSCRIBERS
router.get("/", async (req, res) => {
  try {
    const subscribers = await subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GETTING ONE SUBSCRIBER
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//CREATING SUBSCRIBERS
router.post("/", async (req, res) => {
  const subscriber = new subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber); //status 201 means successfully created a new object //
  } catch (err) {
    res.status(400).json({ message: err.message }); //status 400 means there is something wrong with user input, not your server//
  }
});

//UPDATING SUBSCRIBERS
router.patch("/:id", (req, res) => {}); //using patch allows to only update information that is being passed instead of put

//DELETING SUBSCRIBERS
router.delete("/:id", (req, res) => {});

module.exports = router;
