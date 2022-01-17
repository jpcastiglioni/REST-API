const express = require("express");
const router = express.Router();
const User = require("../models/User");

//VALIDATION

const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});

router.post("/register", async (req, res) => {
  //validate data
  const { error } = schema.validate(req.body);
  //   const validation = Joi.valid(req.body, schema);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
    res.send("Register");
  }
});

router.post("/login", (req, res) => {
  res.send("Register");
});

module.exports = router;
