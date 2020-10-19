export default class Game {
    constructor(data) {
        this.id = data.id
        this.question = data.question
        this.answer = data.answer
        this.value = data.value
        this.category = data.category.title
    }

    get Template() {

        return /*html*/`
        <div class="card border rounded d-flex flex-column align-items-center p-3">
            <h3>${this.category}</h3>
            <hr/>
            <h4 class="mb-3">${this.question}</h4>
            <h5 class="mb-3">Point Value: <span id="value">${this.value}</span></h5>
            <div class="flex-column align-items-center">
                <button class="btn btn-dark mb-4" onclick="app.gameController.showAnswer()">Show Answer</button>
                <h5 id="answer" class="hidden">${this.answer}</h5>
            </div>
        </div>
        `
    }
}
