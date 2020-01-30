"use strict";

function Player(canvas, lives, size) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.lives = lives;
    this.size = size;

    this.x = 100;
    this.y = canvas.height / 2;

    this.direction = 0;
    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4.6;


/*
    this.sprite1 = new Image();
    this.sprite1.src = "../img/sprite1.png";
    this.sprite2 = new Image();
    this.sprite2.src = "../img/sprite2.png";
    this.sprite3 = new Image();
    this.sprite3.src = "../img/sprite3.png";
    this.sprite4 = new Image();
    this.sprite4.src = "../img/sprite4.png";

    this.frame = 0;

    this.animation = [
        {sprite1},
        {sprite2},
        {sprite3},
        {sprite4},
    ];
    */
};
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


/*
Player.prototype.updateFrame = function() {

    this.frame += this.counter % 5 === 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;
}
*/




Player.prototype.draw = function () {
    
    /*
    this.rocket = this.animation[this.frame];
    this.ctx.drawImage(this.sprite1, this.x, this.y, this.size, this.size);
    this.ctx.drawImage(this.sprite2, this.x, this.y, this.size, this.size);
    this.ctx.drawImage(this.sprite3, this.x, this.y, this.size, this.size);
    this.ctx.drawImage(this.sprite4, this.x, this.y, this.size, this.size);
    */
    
    
    this.img = new Image();
    this.img.src = "./img/sprite.png";

    //this.ctx.fillStyle = "lightblue";
    // fillRect(x, y, width, height)
    
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    
};