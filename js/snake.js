//snake
!function () {
    let elements = [] //存储snack

    function Snake(width, height, direction) {
        this.width = width || 20
        this.height = height || 20
        this.direction = direction || 'right'
        this.body = [
            { x: 3, y: 2, color: 'green' },
            { x: 2, y: 2, color: 'rgb(153, 236, 57)' },
            { x: 1, y: 2, color: 'rgb(153, 236, 57)' }
        ]
    }
    Snake.prototype.init = function (map) {
        removeSnake()

        for (let i = 0; i < this.body.length; i++) {

            let obj = this.body[i]
            let snakeDiv = document.createElement('div')
            map.appendChild(snakeDiv)

            let style = {
                position: 'absolute',
                width: this.width + 'px',
                height: this.height + 'px',
                left: obj.x * this.width + 'px',
                top: obj.y * this.height + 'px',
                backgroundColor: obj.color
            }
            for (let i in style) {
                snakeDiv.style[i] = style[i]
            }

            elements.push(snakeDiv)

        }
    }

    Snake.prototype.move = function (food, map) {
        //snake body move
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        //snake head direction
        switch (this.direction) {
            case 'right': this.body[0].x += 1; break;
            case 'left': this.body[0].x -= 1; break;
            case 'top': this.body[0].y -= 1; break;
            case 'bottom': this.body[0].y += 1; break;
        }
        //判断是否吃到food -> head的坐标与食物坐标一致
        let headX=this.body[0].x*this.width
        let headY=this.body[0].y*this.height
        if(headX===food.x&&headY===food.y){
            let snakeLast=this.body[this.body.length-1]
            this.body.push({
                x:snakeLast.x,
                y:snakeLast.y,
                color:snakeLast.color
            })
            food.init(map)
        }
    }
    
    //删除snack
    function removeSnake() {
        for (let i = elements.length - 1; i >= 0; i--) {
            let ele = elements[i]
            //在map中删除snack
            ele.parentNode.removeChild(ele)
            //在数组中删除snack
            elements.splice(i, 1)
        }
    }

    window.Snake = Snake
}()
