let dino;
let obstacles = [];
let obstacleFrequency = 0.02; // Initial frequency of obstacle creation
let score = 0; // Track the current score
let highScore = 0; // Track the high score
let gameOver = false; // Track whether the game is over
let dinoImg; // Variable for the dinosaur image

function preload() {
    dinoImg = loadImage('assets/dino.png'); // Load the dinosaur image
}

function setup() {
    createCanvas(600, 400); // Set the size of the canvas
    dino = new Dino();
}

function draw() {
    background(220);

    if (!gameOver) {
        obstacleFrequency += 0.00001; // Gradually increase the frequency of obstacle creation

        if (obstacles.length === 0 || (random(1) < obstacleFrequency && width - obstacles[obstacles.length - 1].x > 150)) { 
            // Check if no obstacles exist OR if the last obstacle has crossed a certain point
            obstacles.push(new Obstacle());
        }

        for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].show();
            obstacles[i].move();

            if (dino.hits(obstacles[i])) {
                console.log('game over');
                gameOver = true;
            }

            if (obstacles[i].offscreen()) {
                obstacles.splice(i, 1);
                score++; // Increment the score when an obstacle moves off the screen
                if (score > highScore) { // Update the high score if necessary
                    highScore = score;
                }
            }
        }

        dino.show();
        dino.update();
    } else {
        textSize(32);
        text(`Game Over. Your score is ${score}`, width/2 - 100, height/2); // Display the game over message
        text(`Press Space or Tap to retry`, width/2 - 100, height/2 + 50); // Display the retry message
    }

    textSize(12);
    text(`Score: ${score}`, 10, 20); // Display the current score
    text(`High Score: ${highScore}`, 10, 40); // Display the high score
}

function keyPressed() {
    if (key == ' ') {
        if (gameOver) {
            // Restart the game
            dino = new Dino();
            obstacles = [];
            score = 0;
            obstacleFrequency = 0.02;
            gameOver = false;
        } else {
            dino.jump();
        }
    }
}

function mousePressed() {
    if (gameOver) {
        // Restart the game
        dino = new Dino();
        obstacles = [];
        score = 0;
        obstacleFrequency = 0.02;
        gameOver = false;
    } else {
        dino.jump();
    }
}
