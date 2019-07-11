const express = require('express');

// eslint-disable-next-line import/prefer-default-export
const songRoutes = (io) => {
	// eslint-disable-next-line global-require
	const songController = require('../controllers/song')(io);
	const router = express.Router();

	router.post('/', songController.addSong);

	return router;
};

module.exports = songRoutes;
