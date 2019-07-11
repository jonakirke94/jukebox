
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = require('http').Server(app);
const io = require('socket.io')(server);

const songRoutes = require('./routes/song')(io);




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

app.use('/song', songRoutes);

app.use((_req, _res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// internal server error
app.use((error, _req, res, _next) => {
	console.log(error, 'error');
	res.status(500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

server.listen(3000, () => {
	console.log(`Listening on ${3000}`);

	io.on('connect', (socket) => {
		socket.on('disconnect', () => {
			console.log('client disconnected');
		});
	});
});

module.exports = app;
