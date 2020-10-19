import { ProxyState } from "../AppState.js";
import Game from "../Models/Game.js";
import { api } from "../Services/AxiosService.js"

class GameService {

  correct() {
    console.log(ProxyState.value);
    ProxyState.score += ProxyState.value
    api.get("random").then(res => {
      ProxyState.games = res.data.map(rawGameData => new Game(rawGameData))
      ProxyState.value = parseInt(res.data[0].value)
      document.getElementById('score').innerText = ProxyState.score
    }).catch(err => console.error(err))
  }

  wrong() {
    ProxyState.score -= ProxyState.value
    document.getElementById('score').innerText = ProxyState.score
    api.get("random").then(res => {
      ProxyState.games = res.data.map(rawGameData => new Game(rawGameData))
    }).catch(err => console.error(err))
  }

  showAnswer() {
    if (document.getElementById('answer').classList.contains('hidden')) {
      document.getElementById('answer').classList.remove('hidden')
    } else {
      document.getElementById('answer').classList.add('hidden')
    }
  }

  constructor() {
    this.getGame()
  }

  getGame() {
    api.get("random").then(res => {
      console.log(res.data);
      ProxyState.games = res.data.map(rawGameData => new Game(rawGameData))
      ProxyState.value = parseInt(res.data[0].value)
    }).catch(err => console.error(err))
  }

}

export const gameService = new GameService();

