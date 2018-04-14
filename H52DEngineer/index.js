/**
 * Created by yanglei on 2018/4/11.
 */
function H52D () {
    // 创建一个canvas画板
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext("2d")
}

// 圆角矩形
function RoundRect (x, y, w, h, r, fillStyle, strokeStyle) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.r = r
    this.fillStyle = fillStyle
    this.strokeStyle = strokeStyle
}

RoundRect.prototype.draw = function (ctx) {
    if (this.fillStyle) {
        ctx.fillStyle = this.fillStyle
    }
    if (this.strokeStyle) {
        ctx.strokeStyle = this.strokeStyle
    }
    ctx.beginPath()
    ctx.moveTo(this.x + this.r, this.y)
    ctx.arcTo(this.x + this.w, this.y, this.x + this.w, this.y + this.h, this.r)
    ctx.arcTo(this.x + this.w, this.y + this.h, this.x, this.y + this.h, this.r)
    ctx.arcTo(this.x, this.y + this.h, this.x, this.y, this.r)
    ctx.arcTo(this.x, this.y, this.x + this.w, this.y, this.r)
    ctx.closePath()
    ctx.fill()
}