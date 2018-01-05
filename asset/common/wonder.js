class Dots {
    canvas = undefined
    ctx = undefined
    // 绘制点相关
    x = 0
    y = 0
    r = 0
    a = 0
    // 移动相关
    speed = 0
    sx = 0
    sy = 0
    isMouseDot = 0

    constructor (speed, alpha) {
        this.a = alpha && alpha > 0 && alpha <= 1 ? alpha : .8
        this.speed = speed && speed > 0 ? speed : 2
    }

    init (canvas, x, y, isMouseDot) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')

        this.x = x * 2 || Math.random() * this.canvas.width
        this.y = y * 2 || Math.random() * this.canvas.height
        this.r = Math.random() * 6 // 随机生成 <6 的半径值

        if (isMouseDot) this.isMouseDot = 1

        // 随机确定点的移动速度与方向 速度值在 [-this.speed, this.speed) 之间 提高数值可加快速度
        this.sx = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed
        this.sy = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed

        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        this.ctx.fillStyle = 'rgba(255, 255, 255, ' + this.a + ')'
        this.ctx.fill()
        this.ctx.closePath()
    }

    // 更新点位置
    update () {
        if (this.isMouseDot) return

        this.x = this.x + this.sx
        this.y = this.y + this.sy

        // 点超出canvas范围时另其"重生"
        if (this.x < 0 || this.x > this.canvas.width) {
            this.init(this.canvas)
        }
        if (this.y < 0 || this.y > this.canvas.height) {
            this.init(this.canvas)
        }

        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI)
        this.ctx.fillStyle = 'rgba(255,255,255,' + this.a + ')'
        this.ctx.fill()
        this.ctx.closePath()
    }

    // 跟踪鼠标的点的位置更新 x/y为鼠标位置
    mouseDot (x, y) {
        this.x = x * 2
        this.y = y * 2
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI)
        this.ctx.fillStyle = 'rgba(255,255,255,' + this.a + ')'
        this.ctx.fill()
        this.ctx.closePath()
    }
}

export default class Wonder {
    constructor (opts) {
        const $old = document.querySelector(opts.el + ' canvas')
        if ($old) $old.remove()
        const part = document.querySelector(opts.el)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext ? canvas.getContext('2d') : undefined

        const partStyle = window.getComputedStyle(part)
        const width = parseInt(partStyle.width)
        const height = parseInt(partStyle.height)
        const area = width * height      // canvas区域面积
        const cssText = 'width: ' + width + 'px; height: ' + height + 'px;'

        canvas.setAttribute('style', cssText)
        canvas.width = (width * 2).toString()
        canvas.height = (height * 2).toString()

        part.appendChild(canvas)

        let dotsArr = []
        let dotsNum = opts.dotsNumber || parseInt(area / 5000)
        let maxDotsNum = dotsNum * 2
        let overNum = 0 // 超出最大数量的点的数量
        let dotsDistance = opts.lineMaxLength || 250 // 点之间产生连线的最大距离

        //生成点
        for (let i = 0; i < dotsNum; i++) {
            const dot = new Dots(opts.speed, opts.dotsAlpha)
            if (i < dotsNum - 1) {
                dot.init(canvas)
            } else {
                dot.init(canvas, 0, 0, 1)
            }
            dotsArr.push(dot)
        }

        //鼠标事件
        let clickWithNew = opts.clickWithDotsNumber || 5

//        document.addEventListener('click', createDot)

        function createDot (e) {
            const tx = e.pageX
            const ty = e.pageY
            if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {

                for (let i = 0; i < clickWithNew; i++) {
                    const dot = new Dots(opts.speed, opts.dotsAlpha)
                    dotsArr.push(dot)
                    dotsNum += 1
                    dot.init(canvas, tx, ty)
                }
            }
        }

//        const dotEvent = new Dots(opts.speed, opts.dotsAlpha)
//        canvas.addEventListener('mouseenter', mouseDotEnter)
//        canvas.addEventListener('mousemove', mouseDotMove)
//        canvas.addEventListener('mouseleave', mouseDotLeave)
//        function mouseDotEnter (e) {
//            const tx = e.pageX
//            const ty = e.pageY
//            dotEvent.init(canvas, tx, ty, 1)
//        }
//
//        function mouseDotMove (e) {
//            const tx = e.pageX
//            const ty = e.pageY
//            if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {
//                dotEvent.mouseDot(tx, ty)
//            }
//        }
//
//        function mouseDotLeave () {
//            dotEvent.init(canvas)
//        }

        //动画与连线
        const requestAnimFrame = requestAnimationFrame ||
            webkitRequestAnimationFrame || oRequestAnimationFrame ||
            msRequestAnimationFrame
        requestAnimFrame(animateUpdate) // 兼容不同浏览器的requestAnimationFrame

        function animateUpdate () {
            ctx.clearRect(0, 0, canvas.width, canvas.height) // 清空canvas中原有的内容

            // 更新点的位置 数量超出最大值时舍弃旧的点
            if (dotsNum > maxDotsNum) {
                overNum = dotsNum - maxDotsNum
            }

            for (let i = overNum; i < dotsNum; i++) {
                if (dotsArr[i]) dotsArr[i].update()
            }

            // 绘制连线
            for (let i = overNum; i < dotsNum; i++) {
                for (let j = i + 1; j < dotsNum; j++) {
                    const tx = dotsArr[i].x - dotsArr[j].x
                    const ty = dotsArr[i].y - dotsArr[j].y
                    const s = Math.sqrt(Math.pow(tx, 2) + Math.pow(ty, 2))
                    if (s < dotsDistance) {
                        ctx.beginPath()
                        ctx.moveTo(dotsArr[i].x, dotsArr[i].y)
                        ctx.lineTo(dotsArr[j].x, dotsArr[j].y)
                        ctx.strokeStyle = 'rgba(255, 255, 255, ' +
                            (dotsDistance - s) / dotsDistance + ')'
                        ctx.strokeWidth = 1
                        ctx.stroke()
                        ctx.closePath()
                    }
                }
            }

            requestAnimFrame(animateUpdate)
        }
    }
}

