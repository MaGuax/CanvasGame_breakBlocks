class GuaScene {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        this.game.context.fillText('请继承函数', 100, 100)
    }
    update() {

    }
}
