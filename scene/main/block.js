// 砖块
var Block = function(game, position) {
    // position 是 [0, 0] 格式
    var p = position
    // var image = image_form_path('images/block1.png')
    var o = game.imageByName('block1')
    // var o = {
    //     image: image,
    //     x: p[0],
    //     y: p[1],
    //     alive: true,
    //     lifes: p[2] || 1,
    // }
    o.x = p[0]
    o.y = p[1]
    o.alive = true,
    o.lifes = p[2] || 1

    o.kill = function() {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function(b) {
        var result = o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
        return result
    }
    return o
}
