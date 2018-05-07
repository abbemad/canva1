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

var mouse = {
    x: undefined,
    y: undefined
}

// max growth size
var maxRadius = 30;
// shrinking size 
var minRadius = 25;

//color 

var colorArray = [
    '#00A6F5', '#0EFADB', '#03C8DE', '#0367DE', '#043EFA',
];

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})


// resizing screen so circles move 
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init ();
})

function Circle(x, y, dx, dy, radius){

    this.x = x;
    this.y = y;
    
    this.dx = dx;
    this.dy = dy;

    this.radius = radius;
    this.minRadius = radius;

    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.stroke();

        // fill random color 
        c.fillStyle = this.color;
        c.fill();
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

        // interactivity if the mouse touches the circles
        if (mouse.x - this.x < 80 
            && mouse.x - this.x > -80 
            && mouse.y - this.y < 80 
            && mouse.y - this.y > -80) {
            
            if (this.radius < maxRadius){
                this.radius += 1;
                
            }
        }
        // this radius verstellen van grote circle / auto shrink
        else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

// for loop for amount of circles
for (var i = 0; i < 1000; i++){

    //sizing size
    var radius = Math.random() * 3 + 1;

    // spawn circles in canvas randomly
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius; 

    // speed of circles
    var dx = (Math.random() - 0.5) * 1 ;
    var dy = (Math.random() - 0.5) * 1 ;
    

    circleArray.push(new Circle(x, y, dx, dy, radius));

}

var circle = new Circle(200,200, 3, 3, 30);
circle.draw();


var circleArray = [];

// function init for resizing and generate circles again
function init (){

        circleArray = [];
    for (var i = 0; i < 1000; i++){

        //sizing size
        var radius = Math.random() * 3 + 1;
    
        // spawn circles in canvas randomly
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius; 
    
        // speed of circles
        var dx = (Math.random() - 0.5) * 1 ;
        var dy = (Math.random() - 0.5) * 1 ;
        
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

}

function animation() {

    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }


}

animation();