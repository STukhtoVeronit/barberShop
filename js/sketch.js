
function make2DArray(rows, cols) {
    var arr = new Array(rows); //like arr[]; but with number of columns hardcoded
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

let angle = 0;
let cols;
let rows;
let curves;
let width = 400;
let height = 400;
let center = {x: (width/2), y: (height/2)}
let w = width < height ? width/3 : height/3;
let i = Math.floor(Math.random()*10);
let j = Math.floor(Math.random()*10);

function setup() {
    createCanvas(width, height);

    cols = 1;
    rows = 1;
    curves = make2DArray(rows, cols);
    curves[rows - 1][cols - 1] = new Curve();

}

function draw() {

    background(255);
    let d = w - 0.2 * w;
    let r = d / 2;
    noFill();

    strokeWeight(1);
    stroke(185);
// fill(255);TODO: should set circle background color from parametr
    ellipse(center.x, center.y, w*2, w*2);
// let i = 3;//set speed 1

    let cx = w + w / 2;
    let cy = w / 2;

    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle * (i + 1) - HALF_PI);

    strokeWeight(8);
    stroke(185);


    point(cx + x, center.y - Math.sqrt( w*w - Math.pow((center.x - cx + x),2)) );
    point(cx + x, center.y + Math.sqrt( w*w - Math.pow((center.x - cx + x),2)) );

    strokeWeight(1);

// line(cx + x, cy + y, cx + x, cy*5 + y);
    line(cx + x,
        center.y - Math.sqrt( w*w - Math.pow((center.x - cx + x),2)),
        cx + x,
        center.y + Math.sqrt( w*w - Math.pow((center.x - cx + x),2)) );
//   Math.sqrt(w*4 - Math.pow((cx + x),2))

    curves[rows - 1][cols - 1].setX(cx + x);

    let mx1 = w * cos(angle * (1) - HALF_PI)+center.x;
    let my1 = w * sin(angle * (1) - HALF_PI)+center.y;
    let mx2 = w * cos(angle * (1) - HALF_PI*2)+center.x;
    let my2 = w * sin(angle * (1) - HALF_PI*2)+center.y;
    let mx3 = w * cos(angle * (1) - HALF_PI*3)+center.x;
    let my3 = w * sin(angle * (1) - HALF_PI*3)+center.y;
    let mx4 = w * cos(angle * (1) - HALF_PI*4)+center.x;
    let my4 = w * sin(angle * (1) - HALF_PI*4)+center.y;


//   strokeWeight(10);

// 	point(mx1, my1);
// 	point(mx2, my2);
// 	point(mx3, my3);
// 	point(mx4, my4);

//   strokeWeight(2);
// 	ellipse(mx1, my1, d, d);
// 	ellipse(mx2, my2, d, d);
// 	ellipse(mx3, my3, d, d);
// 	ellipse(mx4, my4, d, d);

    noFill();
    stroke(185);
// let j = 5;//set speed 2

    cx = w / 2;
    cy = w + w / 2;

    strokeWeight(1);

    x = r * cos(angle * (j + 1) - HALF_PI);
    y = r * sin(angle * (j + 1) - HALF_PI);

    strokeWeight(8);
    stroke(185);

    point(center.y - Math.sqrt( w*w - Math.pow((center.y - cy + y),2)) , cy + y);
    point(center.y + Math.sqrt( w*w - Math.pow((center.y - cy + y),2)), cy + y);

    stroke(185);
    strokeWeight(1);

    line(center.y - Math.sqrt( w*w - Math.pow((center.y - cy + y),2)),
        cy + y,
        center.y + Math.sqrt( w*w - Math.pow((center.y - cy + y),2)),
        cy + y);

    curves[rows - 1][cols - 1].setY(cy + y);


    curves[rows - 1][cols - 1].addPoint();
    curves[rows - 1][cols - 1].show();

    angle -= 0.01;

    if (angle < -TWO_PI) {
        i = Math.min(3,Math.floor(Math.random()*9));
        j = Math.min(4,Math.floor(Math.random()*9));
        curves[rows - 1][cols - 1].reset();
        angle = 0;
    }
}
