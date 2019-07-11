/* const app = require('./app');

const PORT = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

const songRoutes = require('./routes/song')(io);

app.use('/song', songRoutes);

server.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);

	io.on('connect', (socket) => {

		socket.on('disconnect', () => {
			console.log('client disconnected');
		});
	});
});
 */