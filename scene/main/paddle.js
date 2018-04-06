// 挡板
var Paddle = function(game) {
    var o = game.imageByName('paddle1')

    o.x = 100
    o.y = 250
    o.speed = 15

    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
        }
        o.x = x
    }

    o.move_left = function() {
        o.move(o.x - o.speed)
    }
    o.move_right = function() {
        o.move(o.x + o.speed)
    }

    var aInb = function(x, x1, x2) {
        var result = x >= x1 && x <= x2
        return result
    }
    o.collide = function(ball) {
        var a = o
        var b = ball

        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
    return o
}
