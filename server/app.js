
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/stream');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up CORS to pass correct headers
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});


app.use('/stream', routes);

app.use((_req, _res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});


// internal server error
app.use((error, _req, res, _next) => {
	res.status(500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
