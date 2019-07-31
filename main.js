
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
        this.color = color
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

        let style={
            position:'absolute',
            width:this.width+'px',
            height:this.height+'px',
            backgroundColor:this.color
        }
        for(let i in style){
            foodDiv.style[i]=style[i]
        }

        // foodDiv.style.position = 'absolute'
        // foodDiv.style.width = this.width + 'px'
        // foodDiv.style.height = this.height + 'px'
        // foodDiv.style.backgroundColor = this.color

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

    var snack = new Food(0, 0, 20, 20, 'rgb(153, 236, 57)')
    snack.init(map)

    //删除food
    function removeFoodDiv (){
        for(let i =0;i<elements.length;i++){
            let ele = elements[i]
            //删除map中的foodDiv
            ele.parentNode.removeChild(ele)
            //删除elements数组中的foodDiv
            elements.splice(i,1)
        }
    }

}()

//snack
!function(){
    function Snack(width,height,direction){
        let elements=[] //存储snack
        this.width=width||20
        this.height=height||20
        this.direction=direction||'right'
        this.body=[
            {x:3,y:2,color:'green'},
            {x:2,y:2,color:'rgb(153, 236, 57)'},
            {x:1,y:2,color:'rgb(153, 236, 57)'}
        ]
    }
    Snack.prototype.init=function(map){
        for(let i=0;i<this.body.length;i++){
            let obj=this.body[i]

            let snackDiv=document.createElement('div')
            map.appendChild(snackDiv)

            let style={
                position:'absolute',
                width:this.width+'px',
                height:this.height+'px',
                left:obj.x,
                top:obj.y,
                backgroundColor:obj.color
            }
            for(let i in style){
                foodDiv.style[i]=style[i]
            }

            element.push(snackDiv)

        }
    }

    window.Snack=Snack

}()