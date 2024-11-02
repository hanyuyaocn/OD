
let mora;

function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

 
  mora = new Mora(width / 2, height / 2);
}

function draw() {
  
  background(0);
  drawFloor(); 

  mora.update();
  mora.display();
}


class Mora {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.pupilSize = 30;
    this.pupilX = 0;
    this.pupilY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.startTime = millis();
    this.duration = 3000;
  }
  update() {
    if (millis() > this.startTime + this.duration) {
      this.targetX = random(-40, 40);
      this.targetY = random(-40, 40);
      this.startTime = millis();
    }

    let t = (millis() - this.startTime) / this.duration;
    t = constrain(t, 0, 1);

    this.pupilX = lerp(this.pupilX, this.targetX, t);
    this.pupilY = lerp(this.pupilY, this.targetY, t);
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke()
    //tentacles
    fill(100)
    for(let i=0; i <=  2*PI; i+=PI/4){
      rotate(i);
      beginShape()
        curveVertex(60,10);
        curveVertex(85,10+10*sin(0.1*frameCount+PI/2));
        curveVertex(110,10+10*sin(0.1*frameCount+PI));
        curveVertex(135,10+10*sin(0.1*frameCount+3*PI/2));
        curveVertex(160,10+10*sin(0.1*frameCount));
        curveVertex(135,-10+10*sin(0.1*frameCount+3*PI/2));
        curveVertex(110,-10+10*sin(0.1*frameCount+PI));
        curveVertex(85,-10+10*sin(0.1*frameCount+PI/2));
        curveVertex(60,-10)
      endShape()
    }
    fill(100)
    circle(0,0,200)
    fill(255)
    circle(0,0,130)

    fill(0);
    ellipse(this.pupilX, this.pupilY, this.pupilSize);

    pop();
  }
}



