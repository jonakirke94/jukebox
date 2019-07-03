const axios = require('axios');

class GameService {
	static baseUrl = 'http://localhost:3000';

	static test() {
		return axios.get(this.baseUrl + '/game') 
	}
}

export default GameService;
