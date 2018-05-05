class SceneEdit extends GuaScene {
    constructor(game) {
        super(game)
        this.position = []
        this.blocks = []
        this.color = 0
        this.level = {}
        this.editLevel = 1
        this.__init()
    }

    __init(){
        var s = this
        s.game.canvas.addEventListener('click', function(e) {
            var xy = roundXY(e)

            var [x, y] = xy
            for (var i = 0; i < blockData.length; i++) {
                var p = blockData[i]
                if (x == p[0] && y == p[1]) {
                    s.color = p[2]
                    return
                }
            }

            s.position.push(xy)
            xy.push(s.color)
            var b = Block(s.game, xy)
            s.blocks.push(b)
        })

        s.game.registerAction('s', function(e){
            if (s.position.length == 0) {
                return
            }

            var l = ''
            var result = []
            for (var i = 0; i < s.position.length; i++) {
                var p = s.position[i]
                if (!l.includes(String(p))) {
                    l += String(p)
                    result.push(p)
                }
            }
            //
            if (s.level[s.editLevel] != result) {
                s.level[s.editLevel] = result
                s.position = []
                s.blocks = []
                s.editLevel += 1
                if (s.editLevel == 4) {
                    s.editDone()
                }
            }
        })
    }

    editDone(){
        var s = this
        var result = []
        for (var n in s.level) {
            var data = s.level[n]
            result.push(data)
        }
        localStorage.userLevel = JSON.stringify(result)

        var scene = SceneEditDone.new(s.game)
        s.game.replaceScene(scene)
    }

    draw() {
        var s = this
        for (var i = 0; i < s.blocks.length; i++) {
            var block = s.blocks[i]
            if (block.alive) {
                s.game.drawImage(block)
            }
        }

        //
        for (var i = 0; i < blockData.length; i++) {
            var p = blockData[i]
            var b = Block(s.game, p)
            s.game.drawImage(b)
        }

        s.game.context.fillText('点击上列砖块可改变颜色', 100, 390)
        s.game.context.fillText('第' + s.editLevel + '关，按 s 保存当前编辑并进入下一关', 300, 390)
    }

    update() {

    }
}
