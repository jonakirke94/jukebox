const express = require('express');
const audioController = require('../controllers/audio');

const router = express.Router();

router.get('/', audioController.getAudio);

module.exports = router;
