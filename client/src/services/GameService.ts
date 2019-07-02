import { Game } from "../model/Game";

class GameService {
	static baseUrl = 'http://localhost:3000';

	static generateGame() {
		return new Promise( (resolve, reject) => {
			const game = new Game();
			resolve(game);
		});
	}
}

export default GameService;
