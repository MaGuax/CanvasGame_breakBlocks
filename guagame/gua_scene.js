class GuaScene {
    constructor(game) {
        this.game = game
        this.game.actions = {}
        this.game.keydowns = {}
    }

    draw() {

    }

    update() {

    }

    static new(game) {
        var i = new this(game)
        return i
    }
}
