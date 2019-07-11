const axios = require('axios');

class SongService {
	static baseUrl = 'http://localhost:3000';



	static add(id:string) {
		const data = {id}
		return axios.post(this.baseUrl + '/song', data);
	}
}

export default SongService;
