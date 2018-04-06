// 工具

// 获取图片
var image_form_path = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var imageByName = function(path) {

}

// 相交函数
var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
