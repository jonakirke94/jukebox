
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
// eslint-disable-next-line import/prefer-default-export
module.exports = function (io) {
	const that = {};
	that.addSong = function(req, res, _next) {
		const db = new JsonDB('TEST', true, true, '/');

		const id = req.body.id;

		db.push('/songs[]', id);

		io.emit('NEW_VIDEO', id);

		console.log('added song', req.body.id);
		res.status(200);
		res.end();
	}



	return that;
}
;