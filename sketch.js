let x1, y1, x2, y2;
let angle1, angle2;
let strokeCol, colChange;
let scaler;

let clock;
function setup() {
    createCanvas(800, 600);
    background(253, 231, 76);
    x1 = width / 2;
    y1 = height / 2;
    angle1 = angle2 = 0;
    strokeCol = 254;
    colChange = -1;
    scaler = 70;
}

function draw() {
    clock = new Clocks(x1, y1);
    clock1 = new Clocks(x1 - 100, y1 - 100);
    clock.display();
    clock1.display();
    let cX, cY;
    cX = cY = 1;
    x1 += cX; y1 += cY;
    if (x1 > width || x1 < 0) cX = -cX;
}

class Clocks {

    constructor(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
    }

    display() {
        this.x2 = this.x1 + 50 + scaler*sin(angle1);
        this.y2 = this.y1 + 100 + scaler*cos(angle2);
        strokeWeight(2);
        stroke(195, 63, strokeCol);
        line(this.x1, this.y1, this.x2, this.y2);
        strokeCol += colChange;
        if ((strokeCol > 254) || (strokeCol < 0)) {
            colChange = -colChange;
        }
        angle1++; angle2 ++;
        scaler = random(0, 70);
    }
}