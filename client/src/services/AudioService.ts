const axios = require('axios');

class AudioService {
	static baseUrl = 'http://localhost:3000';

	static test() {
		return axios.get(this.baseUrl + '/stream') 
	}
}

export default AudioService;
