"use strict";

function Player(canvas, lives, size) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.lives = lives;
    this.size = size;

    this.x = 10;
    this.y = canvas.height / 2;

    this.direction = 0;
    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4.6;
}

Player.prototype.setDirection = function (direction) {
    // +1 down  -1 up
    if (direction === "up") this.speed = - this.jump;
};

Player.prototype.didCollide = function (enemy, position) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
    if(position === "top") {
        var enemyLeft = enemy.x;
        var enemyRight = enemy.x + enemy.width;
        var enemyTop = enemy.topY
        var enemyBottom = enemy.y + enemy.height;

        var crossRight = enemyLeft <= playerRight && enemyRight >= playerLeft;

        var crossLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;

        var crossTop = enemyBottom >= playerTop && enemyTop <= playerBottom;

        var crossBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;

        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            console.log("hit");
            return true;
        }
    } else if(position === "bottom") {
        var enemyLeft = enemy.x;
        var enemyRight = enemy.x + enemy.width;
        var enemyTop = enemy.bottomY;
        var enemyBottom = enemy.y + enemy.height;

        var crossRight = enemyLeft <= playerRight && enemyRight >= playerLeft;

        var crossLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;

        var crossTop = enemyBottom >= playerTop && enemyTop <= playerBottom;

        var crossBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;
          if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            console.log("bottom hit")
          return true;
        } 
        return false;
        
};
} 
Player.prototype.updatePosition = function () {
    this.speed += this.gravity;
    this.y = this.y += this.speed;
};

Player.prototype.handleScreenCollision = function () {
    this.updatePosition();

    var screenTop = 0;
    var screenBottom = this.canvas.height;

    if (this.y + this.size > screenBottom) this.direction = -1;
    else if (this.y < screenTop) this.direction = 1;
};

Player.prototype.removeLife = function () {
    this.lives -= 1;
};

Player.prototype.draw = function () {
    this.img = new Image();
    this.img.src = "./img/loader.png"
    //this.ctx.fillStyle = "lightblue";

    // fillRect(x, y, width, height)
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};