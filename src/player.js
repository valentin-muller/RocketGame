"use strict";

class Player {
    constructor(canvas, lives, size) {
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
    };




setDirection() {
    if (direction === "up") this.speed = - this.jump; 
};



didCollide(enemy, position) {
    let playerLeft = this.x;
    let playerRight = this.x + this.size;
    let playerTop = this.y;
    let playerBottom = this.y + this.size;
    if(position === "top") {
        let enemyLeft = enemy.x;
        let enemyRight = enemy.x + enemy.width;
        let enemyTop = enemy.topY
        let enemyBottom = enemy.y + enemy.height;

        let crossRight = enemyLeft <= playerRight && enemyRight >= playerLeft;

        let crossLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;

        let crossTop = enemyBottom >= playerTop && enemyTop <= playerBottom;

        let crossBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;

        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            console.log("hit");
            return true;
        }
    } else if(position === "bottom") {
        let enemyLeft = enemy.x;
        let enemyRight = enemy.x + enemy.width;
        let enemyTop = enemy.bottomY;
        let enemyBottom = enemy.y + enemy.height;

        let crossRight = enemyLeft <= playerRight && enemyRight >= playerLeft;

        let crossLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;

        let crossTop = enemyBottom >= playerTop && enemyTop <= playerBottom;

        let crossBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;
          if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            console.log("bottom hit")
          return true;
        } 
        return false;
        
};
} 



updatePosition() {
    this.speed += this.gravity;
    this.y = this.y += this.speed;
};

handleScreenCollision() {
    this.updatePosition();

    let screenTop = 0;
    let screenBottom = this.canvas.height;

    if (this.y + this.size > screenBottom) this.direction = -1;
    else if (this.y < screenTop) this.direction = 1;
};

removeLife() {
    this.lives -= 1;
};







draw() {
    


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

};