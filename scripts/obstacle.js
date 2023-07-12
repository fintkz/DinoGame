class Obstacle {
    constructor() {
        this.r = 50; // Fixed size for the obstacles
        this.x = width;
        this.y = height - this.r;
        this.speed = 5;
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
