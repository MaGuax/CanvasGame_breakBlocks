var loadLevel = function(game, n) {
    var blocks = []
    n = n - 1
    var userLevel = localStorage.userLevel
    if (!userLevel) {
        var level = levels[n]
    } else {
        userLevel = JSON.parse(userLevel)
        var level = userLevel[n]
    }
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var blocks = []

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false

    // window.addEventListener('keydown', function(event){
    //     var k = event.key
    //     if (k == 'p') {
    //         paused = !paused
    //     }
    // })

    //
    document.querySelector('#id-input-speed').addEventListener('change', function(e) {
        var input = e.target
        var fps = Number(input.value)
        window.fps = fps
    })
}

var __main = function() {
    var images = {
        ball: 'images/ball1.png',
        paddle: 'images/paddle1.png',
        block0: 'images/block1.png',
        block1: 'images/block2.png',
        block2: 'images/block3.png',
        block3: 'images/block4.png',
        block4: 'images/block5.png',
        block5: 'images/block6.png',
    }

    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)


}
