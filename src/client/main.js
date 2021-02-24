const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgb(30, 30, 30)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function setup() {}

function draw() {
    requestAnimationFrame(draw);
}

setup();
draw();
