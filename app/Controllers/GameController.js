import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.games.forEach(g => template += g.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class GameController {
  constructor() {
    ProxyState.on("games", _draw);
    _draw()
  }

  correct() {
    gameService.correct()
  }

  wrong() {
    gameService.wrong()
  }

  showAnswer() {
    gameService.showAnswer()
  }


}
