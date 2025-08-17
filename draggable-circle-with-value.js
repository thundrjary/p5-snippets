// Draggable number circle that snaps back to origin
class DraggableNumber {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.size = 40;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.originalX = x;
        this.originalY = y;
    }
    
    draw() {
        push();
        translate(this.x, this.y);
        
        strokeWeight(2);
        stroke(255, 200, 100);
        if (this.dragging) {
            fill(100, 80, 40);
            scale(1.1);  // Grow when dragging
        } else {
            fill(60, 40, 20);
        }
        circle(0, 0, this.size);
        
        noStroke();
        fill(255, 200, 100);
        textAlign(CENTER);
        textSize(18);
        text(this.value, 0, 6);
        
        pop();
    }
    
    contains(px, py) {
        return dist(px, py, this.x, this.y) < this.size/2;
    }
    
    startDrag(mx, my) {
        this.dragging = true;
        this.offsetX = this.x - mx;
        this.offsetY = this.y - my;
    }
    
    drag(mx, my) {
        if (this.dragging) {
            this.x = mx + this.offsetX;
            this.y = my + this.offsetY;
        }
    }
    
    stopDrag() {
        this.dragging = false;
    }
    
    reset() {
        this.x = this.originalX;
        this.y = this.originalY;
    }
}
