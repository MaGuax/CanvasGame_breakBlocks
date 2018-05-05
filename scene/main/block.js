var Block = function(game, position) {
    var p = position
    var color = p[2]
    var o = game.imageByName(`block${color}`)

    o.x = p[0]
    o.y = p[1]
    o.alive = true
    o.lifes = p[3] || 1,

    o.kill = function(){
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }

    o.collide = function(b){
        return o.alive && rectIntersects(o, b) || rectIntersects(b, o)
    }

    return o
}
