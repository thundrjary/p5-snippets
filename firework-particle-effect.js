// Simple particle for explosion effects
class Particle {
    constructor(x, y, color = [255, 200, 100]) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.life = 255;
        this.color = color;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1;  // Gravity
        this.life -= 5;
    }
    
    draw() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2], this.life);
        circle(this.x, this.y, map(this.life, 0, 255, 1, 6));
    }
    
    isDead() {
        return this.life <= 0;
    }
}

// Usage: Create explosion at x, y
function createExplosion(x, y, numParticles = 20, color = [255, 200, 100]) {
    let particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y, color));
    }
    return particles;
}
