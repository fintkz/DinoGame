class Dino {
    constructor() {
        this.r = 50;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1.5; // Decreased gravity for higher jumps
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -23; // Increased jump height
        }
    }

    hits(obstacle) {
        let dinoX = this.x;
        let dinoY = this.y;
        let obstacleX = obstacle.x;
        let obstacleY = obstacle.y;

        // Check if the dinosaur and the obstacle are overlapping
        if (
            dinoX < obstacleX + obstacle.r &&
            dinoX + this.r > obstacleX &&
            dinoY < obstacleY + obstacle.r &&
            dinoY + this.r > obstacleY
        ) {
            return true;
        }
        return false;
    }

    show() {
        image(dinoImg, this.x, this.y, this.r, this.r); // Draw the dinosaur image
    }

    update() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }
}
