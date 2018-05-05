var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// // vierkant
// c.fillStyle = 'green';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'darkgreen';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'black';
// c.fillRect(600, 100, 100, 100);

// // lijn
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = 'blue';
// c.stroke();

// // // rondje
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = 'purple';
// // c.stroke();

// // for loop voor random spawn circle
// for (var i = 0; i < 3; i ++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'purple';
//     c.stroke();
// }

// random spanw circle + speed / velocity 
// bouncen wall 

// // random spawnm
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight; 

// var dx = (Math.random() - 0.5) * 50 ;
// var dy = (Math.random() - 0.5) * 50 ;

// var radius = 30;

var mouse ={
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

function Circle(x, y, dx, dy, radius){

    this.x = x;
    this.y = y;
    
    this.dx = dx;
    this.dy = dy;

    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.stroke();
    }

    this.update = function (){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx; 
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy; 
        }
    
    
        this.x += this.dx;
        this.y += this.dy;
        // als muis aanraakt increased grote circle
        if (mouse.x - this.x < 80) {
            this.radius += 1;
        }

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 10; i++){
    var radius = 30;

    // spawn in screen

    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius; 
    var dx = (Math.random() - 0.5) * 50 ;
    var dy = (Math.random() - 0.5) * 50 ;
    

    circleArray.push(new Circle(x, y, dx, dy, radius));

}


var circle = new Circle(200,200, 3, 3, 30);
circle.draw();

function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }


}

animation();