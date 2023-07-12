class Obstacle {
    constructor(gap = 150) {
        this.r = 50; // Fixed size for the obstacles
        this.x = width;
        this.y = height - this.r; // Adjusted y position to align the obstacles with the ground level
        this.speed = 5; // Initial speed of the obstacle
    }

    move() {
        this.x -= this.speed;
    }

    show() {
        rect(this.x, this.y, this.r, this.r);
    }

    offscreen() {
        return this.x < -this.r;
    }
}
