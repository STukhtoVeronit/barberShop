class Curve {

    constructor() {
        this.path = [];
        this.current = createVector();
        this.strokeColor = [100, 140, 200];
        this.randomColor = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 3), Math.floor(Math.random() * 2)];
    }

    setX(x) {
        this.current.x = x;
    }

    setY(y) {
        this.current.y = y;
    }

    getStrokeColor() {
        this.strokeColor[0] = this.switchColor(0);
        this.strokeColor[1] = this.switchColor(1);
        this.strokeColor[2] = this.switchColor(2);
        return this.strokeColor;
    }
    switchColor(index) {
        if ((this.strokeColor[index] + this.randomColor[index]) < 255) {
            if ((this.strokeColor[index] + this.randomColor[index]) > 10) {
                return this.strokeColor[index] + this.randomColor[index] * Math.random();
            } else {
                this.randomColor[index] = -this.randomColor[index];
                return this.strokeColor[index] + this.randomColor[index]* Math.random();;
            }

        } else {
            this.randomColor[index] = -this.randomColor[index];
            return this.strokeColor[index] + this.randomColor[index]* Math.random();;
        }

    }

    addPoint() {
        this.path.push(this.current);
    }

    reset() {
        this.path = [];
    }

    show(x, y) {
        stroke(...this.getStrokeColor());
        strokeWeight(2);
        noFill();
        beginShape();
        for (let v of this.path) {
            vertex(v.x, v.y);
        }
        endShape();

        strokeWeight(8);
        point(this.current.x, this.current.y);
        this.current = createVector();
    }
}