/** @format */

const express = require("express");
const { ProModle } = require("../models/product.model");
const proRoute = express.Router();
const jwt = require("jsonwebtoken");

proRoute.post("/add", async (req, res) => {
  try {
    const product = new ProModle(req.body);
    await product.save();
    res.status(200).send({ msg: "product is added" });
  } catch (err) {
    res.send({ err: err.message });
  }
});
proRoute.get("/show", async (req, res) => {
    const product = await ProModle.find();
  res.status(200).send(product);
});

module.exports = { proRoute };
