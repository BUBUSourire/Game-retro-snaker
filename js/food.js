//产生随机数对象

!function (window) {
    function Random() {

    }
    Random.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    //将局部对象变成顶级对象
    window.Random = new Random()
}(window)
//  console.log(Random.getRandom(0,5))

var map = document.querySelector('#map')

//food
!function () {
    var elements = [] //存储food

    function Food(x, y, width, height, color) {
        this.width = width || 20
        this.height = height || 20
        this.color = color || '#FE5357'
        this.x = x || 0
        this.y = y || 0
    }
    //初始化food的效果及位置并显示在map上
    Food.prototype.init = function (map) {
        removeFoodDiv()

        this.food = document.createElement('div')
        var foodDiv = this.food
        map.appendChild(foodDiv)
        elements.push(foodDiv)

        let style = {
            position: 'absolute',
            width: this.width + 'px',
            height: this.height + 'px',
            backgroundColor: this.color
        }
        for (let i in style) {
            foodDiv.style[i] = style[i]
        }

        this.render(map)
    }
    //产生随机位置
    Food.prototype.render = function (map) {
        this.x = Random.getRandom(0, map.offsetWidth / this.width) * this.width
        this.y = Random.getRandom(0, map.offsetHeight / this.height) * this.height
        var foodDiv = this.food
        foodDiv.style.left = this.x + 'px'
        foodDiv.style.top = this.y + 'px'
    }

    //删除food
    function removeFoodDiv() {
        for (let i = 0; i < elements.length; i++) {
            let ele = elements[i]
            //删除map中的foodDiv
            ele.parentNode.removeChild(ele)
            //删除elements数组中的foodDiv
            elements.splice(i, 1)
        }
    }

    window.Food = Food
}()

