"use strict";
var buttonClick = new Audio("../waw/button-click.wav");


// Creates a HTML elements out of the string that looks like html
function buildDom(htmlString) {
    var div = document.createElement("div");

    div.innerHTML = htmlString;

    return div.children[0];
}

// Run on initial start and call other functions that manage the game
function main() {
    var game;
    var splashScreen;
    var gameOverScreen;
    var finalScore;
    // SPLASH SCREEN
    function createSplashScreen() {
        splashScreen = buildDom(`
    <main class="splash">
      <h1>Invasion</h1>
      <p>It's 2029... </p>
      <button>Let's Go!</button>
    </main>`);

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector("button");

        startButton.addEventListener("click", function () {
            buttonClick.play();
            startGame();
        });
    }

    function removeSplashScreen() {
        splashScreen.remove(); // remove() is an HTML method that removes the element entirely
    }


    // GAME SCREEN
    function createGameScreen() {
        var gameScreen = buildDom(`
    <main class="game container">
    <header>
      <div class="lives">
        <span class="label">Lives:</span>
        <span class="value"></span>
      </div>
    </header>
      <div class="canvas-container">
        <div class="score">
        <span class="value"></span>
      </div>
      <canvas></canvas>
    </div>
  </main>
    `);

        document.body.appendChild(gameScreen);

        return gameScreen;
    }

    function removeGameScreen() {
        finalScore = game.countScore();
        game.gameScreen.remove(); // We will implement it in the game object

    }

    //
    // GAME OVER SCREEN
    function createGameOverScreen(score) {
        gameOverScreen = buildDom(`
    <main class="gameover">
      <h1>Game over</h1>
      <p>Your score: <span>${finalScore-1}</span></p>
      <button>Restart</button>
    </main>
    `);

        document.body.appendChild(gameOverScreen);

        var button = gameOverScreen.querySelector("button");

        button.addEventListener("click", startGame);
    }

    function removeGameOverScreen() {
        if (gameOverScreen !== undefined) {
            // if it exists saved in a variable
            gameOverScreen.remove();
        }
    }

    //
    // SETTING GAME STATE
    function startGame() {
        removeSplashScreen();
        removeGameOverScreen();

        game = new Game();
        game.gameScreen = createGameScreen();

        // Start the game
        game.start();
        game.passGameOverCallback(gameOver);

        // End the game
    }

    function gameOver() {
        removeGameScreen();
        createGameOverScreen(); // <--

        console.log("GAME OVER IN MAIN");
    }

    // Initialize the start screen
    createSplashScreen();
}

// Ensures that all files are loaded before it runs the set function
window.addEventListener("load", main);