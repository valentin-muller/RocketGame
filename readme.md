Module-1-project

**Version 1.0.0**

`name` is a game where you help the spaceship navigate between the asteroids in order to survive. The physics of the game is similiar to the well-know game Flappy Bird but it has a completely novel UI. The game doesn't have an end, the player with the highest score is the winner. The game is over when the spaceship collides with one of the asteroids.

# MVP (DOM-CANVAS)

- Canvas - structure
- Game states
- Player and Barrier creation
- Gravity and movement of the player
- Collision Detection
- On Click Events

# Data structure

## Main.JS
```
function buildDom() {}

function main() {}

function createStartScreen(){}

function removeStartScreen() {}

function createGameScreen(){}

function removeGameScreen() {}

function createGameOverScreen(){}

function removeGameOverScreen() {}

function startGame() {}

function gameOver() {}

```

## Game.JS
```
Game(){}

Game.prototype.start = function() {}

Game.prototype.startLoop = function () {}

Game.prototype.gameOver = function () {}

Game.prototype.checkCollisions = function () {}
```

## Player.JS
```
function Player() {}

Player.prototype.move = function () {}

Player.prototype.didCollide = function () {}

Player.prototype.updatePosition = function () {}

Player.prototype.gameOver = function () {}

Player.prototype.draw = function () {}
```

## Enemy.JS
```
function Enemy() {}

Enemy.prototype.draw 

Enemy.prototype.isInsideScreen
```

# Task

First step is to create an MVP without any design. Once we have the MVP with all the physics, basic features and elements, the design and more advanced features will follow.

# Links
[Trello](https://trello.com/invite/b/BoTPuzrG/8366c2de013c19e207db57b965af7f40/1-project-ironhack)

[Github](https://github.com/valentin-muller) 


## Created by 
- Valentin Müller, Ironhack Barcelona <realadresses@icloud.com>