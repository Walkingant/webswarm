import d3 from 'd3';
export class Boid {
  constructor(px, py, vx, vy){
    this.x = px;
    this.y = py;
    this.vx = vx;
    this.vy = vy;

    this.separationCoef = 0.1;
    this.aliCoef = 0.1;
    this.cohesionCoef = 0.1;
  }

  update(neighbours){
    let vSep = {
      x: 0,
      y: 0
    },
    vAli = {
      x: 0,
      y: 0
    },
    vCoh = {
      x: 0,
      y: 0
    };
    //calc separation
    //calc alignment
    //calc cohesion
    //add

    if (Array.isArray(neighbours) && neighbours.length !== 0) {
      let len = neighbours.length;

      for (let boid of neighbours) {
        vCoh.x += boid.x;
        vCoh.y += boid.y;

        vAli.x += boid.vx;
        vAli.y += boid.vy;
      }

      vCoh.x /= len;
      vCoh.y /= len;

      vAli.x /= len;
      vAli.y /= len;


      let cohVx = (vCoh.x - this.x) * this.cohesionCoef;
      let cohVy = (vCoh.y - this.y) * this.cohesionCoef;

      this.vx = Math.max( Math.min(this.vx + cohVx + vAli.x * this.aliCoef, 0.1), -0.1);
      this.vy = Math.min( Math.max(this.vy + cohVy + vAli.y * this.aliCoef, 0.1), -0.1);
    }

    this.x += this.vx;
    this.y += this.vy;
    this.drawBoid(this.x, this.y);
  }

  drawBoid(x,y) {
    var g = d3.select("svg").append("g");
    g.insert("circle").attr({
      cx: x,
      cy: y,
      fill: "green",
      r: 1
    });
  }

  getPosition(){

  }
}
