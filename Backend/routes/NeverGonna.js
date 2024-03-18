const express = require("express");
const router = express.Router();

const rickRoll = require('../controllers/neverGonnaController');

router.post('/',rickRoll);

module.exports = router;