let x1, y1, x2, y2;
let angle1, angle2;
let strokeCol, colChange;
let scaler;

let clock;
let xs = [100, 250, 300, 450 ,650 ,700];
let ys = [200, 256, 450, 175, 350, 400];
function setup() {
    createCanvas(800, 600);
    background(224, 200, 121);
    x1 = width / 2;
    y1 = height / 2;
    angle1 = angle2 = 0;
    strokeCol = 254;
    colChange = -1;
    scaler = 70;
}

function draw() {
    let strokeCol1 = strokeCol;
    let strokeCol2 = 2 * strokeCol;
    clock = new Clocks(x1, y1, random(10, 60), 232, 116, 97);
    clock1 = new Clocks(x1 - 100, y1 - 100, random(10, 60), 229, 143, 101);
    clock.display();
    clock1.display();



    for (i = 0; i < 6; i++) {
        clock = new Clocks(xs[i], ys[i], random(10, 50), random(256), random(256), random(256));
        clock.display();
    }
//    let cX, cY;
//    cX = cY = 1;
//    x1 += cX; y1 += cY;
//    if (x1 > width || x1 < 0) cX = -cX;
}

class Clocks {

    constructor(x1, y1, scaler, col1, col2, col3) {
        this.x1 = x1;
        this.y1 = y1;
        this.scaler = scaler;
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
    }

    display() {
        this.x2 = this.x1 + this.scaler*sin(angle1);
        this.y2 = this.y1 + this.scaler*cos(angle2);
        strokeWeight(1);
        stroke(this.col1, this.col2, this.col3);
        line(this.x1, this.y1, this.x2, this.y2);
//        this.col1 += colChange;
//        this.col2 += colChange;
//        this.col3 += colChange;
        if ((this.col1 > 254) || (this.col1 < 0)) {
            colChange = -colChange;
        }
        angle1++; angle2 ++;
        scaler = random(0, 70);
    }
}