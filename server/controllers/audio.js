const youtubeStream = require('youtube-audio-stream');

exports.getAudio = (_req, res, _next) => {
	try {
		youtubeStream('tw4DdF8dSjE').pipe(res);
	} catch (exception) {
		console.log(exception, 'excep');
		res.status(500).send(exception);
	}
};
