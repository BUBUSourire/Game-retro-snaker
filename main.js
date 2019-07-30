
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

//food
!function (window) {
    var map = document.querySelector('#map')

    function Food(width, height, color) {
        this.width = width || 20
        this.height = height || 20
        this.color = color
        this.x = 0
        this.y = 0
        
        this.food = document.createElement('div')
    }
    //初始化food的效果及位置并显示在map上
    Food.prototype.init = function (map) {
        var foodDiv = this.food
        foodDiv.style.position = 'absolute'
        foodDiv.style.width = this.width + 'px'
        foodDiv.style.height = this.height + 'px'
        foodDiv.style.backgroundColor = this.color
       
        map.appendChild(foodDiv)
        this.render(map)
    }
     //产生随机位置
     Food.prototype.render = function (map) {
        var x = Random.getRandom(0, map.offsetWidth / this.width) * this.width
        var y = Random.getRandom(0, map.offsetHeight / this.height) * this.height
        this.x = x
        this.y = y
        var foodDiv = this.food
        foodDiv.style.left = this.x + 'px'
        foodDiv.style.top = this.y + 'px'
    }

    var snack = new Food(20, 20, 'rgb(153, 236, 57)')
    snack.init(map)
}(window)