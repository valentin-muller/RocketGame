"use strict";

class Enemy { 
    constructor(canvas, speed, y, height, color) {
   
    
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

draw() {
    this.img = new Image ();
    this.img.src = "../img/laser.png"
    //this.ctx.fillStyle = this.color;

    // fillRect(x, y, width, height)
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //this.ctx.fillRect(this.x, this.bottomY, this.width, this.height);
};

updatePosition() {
    this.x = this.x - this.speed;
};

isInsideScreen() {
    return (this.x + this.width * this.height > 0)

};

};