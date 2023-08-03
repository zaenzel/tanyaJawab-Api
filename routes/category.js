const express = require("express");
const router = express.Router();

const categoryHandler = require("./handler/category");

router.get("/", categoryHandler);

module.exports = router;
