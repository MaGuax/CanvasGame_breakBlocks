// 辅助函数
var loadLevel = function(game, n) {
    var blocks = []
    n = n - 1
    var level = levels[n]
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

//
var blocks = []
var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false

    window.addEventListener('keydown', function(event) {
        var key = event.key
        if (key == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(event.key)) {
            // 为了 debug 临时加入的载入关卡功能
            var level = Number(key)
            blocks = loadLevel(game, level)
        }
    })

    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(){
        var input = event.target
        window.fps = Number(input.value)
    })
}


// 入口
var __main = function() {
    var images = {
        ball: 'images/ball1.png',
        block1: 'images/block1.png',
        paddle1: 'images/paddle1.png',
    }

    var game = new GuaGame(50, images, function(g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()
