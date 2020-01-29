"use strict";

function Enemy(canvas, speed, y, height, color) { // y - top edge    //  height is the bottom edge
    //this.position = [];
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    
    this.width = 53;
    this.height = height;
    //this.gap = 85;
    
    this.x = this.canvas.width + this.width;
    this.color = color;
    
    this.topY = 0;
    this.bottomY = 650;
    this.y = y;
    
    
    this.size = this.width * this.height;
    this.speed = speed;
};

Enemy.prototype.draw = function () {
    this.ctx.fillStyle = this.color;

    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.ctx.fillRect(this.x, this.bottomY, this.width, this.height);
};

Enemy.prototype.updatePosition = function () {
    this.x = this.x - this.speed;
};

Enemy.prototype.isInsideScreen = function () {
    return (this.x + this.width * this.height > 0)

};