function pureclean() {
    const canvas = document.querySelector('#canvas');
    clear(10);
}

function drawLine(alpha = 1, x1 = 100, y1 = 100, x2 = 300, y2 = 100) {
    const canvas = document.querySelector('#canvas');
    clear(x1, y1, x2, y2);
    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = `rgb(255, 255, 255, ${alpha})`;
    ctx.lineWidth = 3;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

}

function clear(x1 = 100, y1 = 100, x2 = 300, y2 = 100, x = 3) {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'black';
    ctx.lineWidth = x;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function clearCircle(x = 90, y = 50) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.fill();
}

function drawCircle( x = 90, y = 50) {
    clearCircle(x, y);
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.fill();
}
var grid = [2, 3, 3, 1];
async function generateCircles() {
    const {width, height} = document.querySelector('#canvas').getBoundingClientRect();
    let ratioH = height/3;
    let ratioW = width/3;
    let oldH = ratioH;
    ratioH = height/4;
    for(let i = 0; i < 5000; i++) {
        drawLine(Math.random(), 50, oldH * 1, ratioW, ratioH);
        drawLine(Math.random(), 50, oldH * 1, ratioW, ratioH * 2);
        drawLine(Math.random(), 50, oldH * 1, ratioW, ratioH * 3);
        drawCircle(50, oldH * 1);
        drawCircle(50, oldH * 2);
        drawCircle(ratioW * 1, ratioH * 1);
        drawCircle(ratioW * 1, ratioH * 2);
        drawCircle(ratioW * 1, ratioH * 3);
        await new Promise((resolve) => 
        setTimeout(() => {
            resolve();
        }, 1)
    );
    }
}