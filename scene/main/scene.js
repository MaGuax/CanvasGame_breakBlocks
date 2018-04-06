var Scene = function(game) {
    var s = {
        game: game,
    }
    var paddle = Paddle(game)
    var ball = Ball(game)

    var score = 0

    var blocks = loadLevel(game, 1)

    game.registerAction('a', function() {
        paddle.move_left()
    })
    game.registerAction('d', function() {
        paddle.move_right()
    })
    game.registerAction('f', function() {
        ball.fire()
    })

    s.draw = function() {
        // console.log('bug2');
        game.drawImage(paddle)
        game.drawImage(ball)
        // draw block
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }

        // draw labels
        game.context.fillText('分数：' + score, 10, 290)
    }

    s.update = function() {
        if (window.paused) {
            return
        }
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转至游戏结束的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
            // return
        }
        // 判断球和挡板相撞相撞
        if (paddle.collide(ball)) {
            // 使用反弹函数
            ball.rebound()
        }
        // 判断球和砖块相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.rebound()
                // 更新分数
                score += 100
            }
        }
    }

    // mouse event
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })

    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }
    })

    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = false
        }
    })

    return s
}
