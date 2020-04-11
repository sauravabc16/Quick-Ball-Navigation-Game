// Variables
var app = document.getElementById("app");
var ball = document.getElementById("ball");
var x = 250; // Current x position
var y = 140; // Current y position

ball.style.left = 250 + "px"; // Set ball to be positioned by x
ball.style.top = 140 + "px"; // Set ball to be positioned by y

// Keyboard Movement Func
function move(e) {
    if (e.keyCode == 39) { // Right
        moveRight();
    }
    else if (e.keyCode == 37) { // Left 
        moveLeft();
    } 
    else if (e.keyCode == 40) { // Down
        moveDown();
    } 
    else if (e.keyCode == 38) { // Up
        moveUp();
    }
}
document.onkeydown = move;

// Buttons Menu Func
function moveUp() {
    if(y >= 5) {
        y -= 5;
        ball.style.top = y + "px";
        if(y < 305 && y > 20) {
            ball.style.backgroundColor = "blue";
        }
        else if(y < 20 && y > 0) {
            ball.style.backgroundColor = "red";
        }
        if(y == 10) {
            ball.style.top = 0;
            y = 0;
        }
        if(ball.style.backgroundColor == "blue" && y > 65) {
            y -= 5;
        }
    }
}
function moveRight() {
    if(x <= 515) {
        x += 5;
        ball.style.left = x + "px";
        if(x > 500 && x < 515) {
            ball.style.backgroundColor = "red";
        }
        else if(x > 20 && x < 500) {
            ball.style.backgroundColor = "blue";
        }
        if(x == 510) {
            ball.style.left = 520 + "px";
            x = 520;
        }
        if(ball.style.backgroundColor == "blue" && x > 65) {
            x += 5;
        }
    }
}
function moveLeft() {
    if(x >= 5) {
        x -= 5;
        ball.style.left = x + "px";
        if(x < 505 && x > 20) {
            ball.style.backgroundColor = "blue";
        }
        else if(x < 20 && x > 0) {
            ball.style.backgroundColor = "red";
        }
        if(x == 10) {
            ball.style.left = 0;
            x = 0;
        }
        if(ball.style.backgroundColor == "blue" && x < 455) {
            x -= 5;
        }
    }   
}
function moveDown() {
    if(y <= 315) {
        y += 5;
        ball.style.top = y + "px";
        if(y > 300 && y < 315) {
            ball.style.backgroundColor = "red";
        }
        else if(y > 20 && y < 300) {
            ball.style.backgroundColor = "blue";
        }
        if(y == 310) {
            ball.style.top = 320 + "px";
            y = 320;
        }
        if(ball.style.backgroundColor == "blue" && y > 65) {
            y += 5;
        }
    }
}

// Reset Func
function reset() {
    ball.style.left = 250 + "px";
    ball.style.top = 140 + "px";
    x = 250;
    y = 140;
    ball.style.backgroundColor = "blue";
}

if(x > 0 && x < 15) {
    ball.style.backgroundColor = "red";
}