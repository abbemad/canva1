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

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight; 

var dx = (Math.random() - 0.5) * 50 ;
var dy = (Math.random() - 0.5) * 50 ;

var radius = 30;

function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'white';
    c.stroke();


    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx; 
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy; 
    }


    x += dx;
    y += dy;
}

animation();