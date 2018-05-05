class SceneEditDone extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.fillText('关卡编辑完成, 按 r 返回标题界面', 10, 290)
    }
}
