class ScenePlay extends GuaScene {
    constructor(game, level) {
        super(game)
        this.paddle = Paddle(game)
        this.ball = Ball(game)
        this.score = 0
        this.level = level
        this.blocks = loadLevel(game, level)

        this.__initEvents()
    }

    __initEvents(){
        var s = this
        s.game.registerAction('a', function(){
            s.paddle.moveLeft()
        })

        s.game.registerAction('d', function(){
            s.paddle.moveRight()
        })

        s.game.registerAction('f', function(){
            s.ball.fire()
        })
    }

    static new(game, level) {
        var i = new this(game, level)
        return i
    }

    draw() {
        var s = this
        s.game.drawImage(s.paddle)
        s.game.drawImage(s.ball)

        for (var i = 0; i < s.blocks.length; i++) {
            var block = s.blocks[i]
            if (block.alive) {
                s.game.drawImage(block)
            }
        }

        s.game.context.fillText('分数: ' + s.score , 10, 390)
        this.game.context.fillText('第' + s.level + '关', 100, 390)
    }

    update() {
        if (window.paused) {
            return
        }

        var s = this

        s.ball.move()

        if (s.paddle.collide(s.ball)) {
            s.ball.rebound()
        }

        if (s.ball.y > s.paddle.y) {
            var end = SceneEnd.new(s.game)
            s.game.replaceScene(end)
        }

        //
        if (s.score == (s.blocks.length * 100)) {
            var level = s.level + 1
            if (level == 4) {
                var done = SceneDone.new(s.game)
                s.game.replaceScene(done)
            } else {
                var next = ScenePlay.new(s.game, level)
                s.game.replaceScene(next)
            }
        }

        //
        for (var i = 0; i < s.blocks.length; i++) {
            var block = s.blocks[i]
            if (block.collide(s.ball)) {
                block.kill()
                s.ball.rebound()
                s.score += 100
            }
        }
    }
}
