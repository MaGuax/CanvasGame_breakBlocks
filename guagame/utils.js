var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.image.height + o.y) {
        if (b.x > o.x && b.x < o.image.width + o.x) {
            return true
        }
    }
    return false
}

// 获取坐标
var roundXY = function(event) {
    let x = event.offsetX
    let y = event.offsetY
    let bw = 60
    let bh = 25
    let nx = parseInt(x / bw) * bw
    let ny = parseInt(y / bh) * bh
    var result = [nx, ny]
    return result
}
