"use strict";

function Game() {
    this.canvas = null;
    this.ctx = null;

    this.topEnemies = []; // push enemiy objects at random
    this.bottomEnemies = [];
    this.player = null;

    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.gap = 250;

    this.counter = 0;

}

// Initialize the game and canvas
Game.prototype.start = function () {
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.canvasContainer.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    var containerWidth = this.canvasContainer.offsetWidth;
    var containerHeight = this.canvasContainer.offsetHeight;

    this.canvas.setAttribute("width", containerWidth);
    this.canvas.setAttribute("height", containerHeight);

    this.previousGapMiddle = this.canvas.height / 2;


    // Create the player
    this.player = new Player(this.canvas, 30000, 100);

    // Add keydown event listeners
    this.handleKeyDown = function (event) {
        if (event.key === "ArrowUp") {
            this.player.setDirection("up");
        } else if (event.key === "ArrowDown") {
            this.player.setDirection("down");
        }
    };

    // this = game instance
    window.addEventListener("keydown", this.handleKeyDown.bind(this));

    // Start the game initially
    this.startLoop();
};

Game.prototype.startLoop = function () {
    var loop = function () {
        // 1. UPDATE THE STATE (game, player, enemy)

        // 0. Player was created already

        // 1. Create enemies randomly

        this.score++;
        this.scoreElement.innerHTML = this.score;
        this.counter++;
        

        if (this.counter % 160 === 0) {
            this.counter = 0;
            //var randomY = this.canvas.height * Math.random();
            var getRandomHeight = function() {
                console.log('this', this);
                var bottomHeightSize = 100;
                var minTopHeightSize = 100;
                var maxTopHeightSize = this.canvas.height - bottomHeightSize - this.gap;

                var randomHeight = Math.floor(Math.random() * (maxTopHeightSize - minTopHeightSize + 1) + minTopHeightSize);
                console.log(randomHeight);
                return randomHeight;

            }.bind(this);
            var randomHeight = getRandomHeight();
            var topEnemy = new Enemy(this.canvas, 5, 0, randomHeight, "green");
            
            var bottomEnemyY = randomHeight + this.gap
            var bottomEnemyHeight = this.canvas.height - bottomEnemyY
            var bottomEnemy = new Enemy(this.canvas, 5, bottomEnemyY, bottomEnemyHeight, "salmon")

            this.topEnemies.push(topEnemy);
            this.bottomEnemies.push(bottomEnemy);

            console.log(this.topEnemies);
            console.log(this.bottomEnemies);
        }
        

        // 2. Check if the player had collisions with enemies (check all of the enemies)
        this.checkCollisions();

        // 3. Update the player and check if he is colliding the screen
        this.player.handleScreenCollision();

        // 4. Update the existing enemies (move them)
        // 5. Check if the enemies our out of the screen
        // [x, x, x ,x ]

        this.topEnemies = this.topEnemies.filter(function (enemyObj) {
            enemyObj.updatePosition(); // 4
            return enemyObj.isInsideScreen(); // 5
        });

        this.bottomEnemies = this.bottomEnemies.filter(function (enemyObj) {
            enemyObj.updatePosition(); // 4
            return enemyObj.isInsideScreen(); // 5
        });
        // 2. CLEAR THE CANVAS
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 3. UPDATE THE CANVAS (DRAW)
        // 1. Draw the player
        this.player.draw();

        // 2. Draw all of the enemies
        this.topEnemies.forEach(function (enemyObj) {
            enemyObj.draw(enemyObj.topY);
        });

        this.bottomEnemies.forEach(function (enemyObj) {
            enemyObj.draw(enemyObj.bottomY);
        });

        // 4. TERMINATE THE LOOP IF THE GAME IS OVER
        if (!this.gameIsOver) {
            requestAnimationFrame(loop);
        }
    }.bind(this);

    // requestAnimationFrame(loop);
    loop();
};

Game.prototype.updateGameStats = function () {};

Game.prototype.gameOver = function () {
    this.gameIsOver = true;

    this.startOver(); // the callback function ( gameOver ) passed from main()
};

Game.prototype.removeGameScreen = function () {};

Game.prototype.checkCollisions = function () {
    this.topEnemies.forEach(function (enemy) {
        if (this.player.didCollide(enemy, "top")) {
            this.player.removeLife();
            console.log("checkingtop");
            // move the enemy out of the screen
            enemy.x = 0 - enemy.size;

            if (this.player.lives === 0) {
                this.gameOver();
            }
        }
    }, this);

    this.bottomEnemies.forEach(function (enemy) {
        if (this.player.didCollide(enemy, "bottom")) {
            this.player.removeLife();
            console.log("checkingbottom");
            // move the enemy out of the screen
            enemy.x = 0 - enemy.size;

            if (this.player.lives === 0) {
                this.gameOver();
            }
        }
    }, this);
};
Game.prototype.passGameOverCallback = function (gameOverFunc) {
    this.startOver = gameOverFunc;
};