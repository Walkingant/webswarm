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

      console.log(vCoh.x, this.x);

      let cohVx = (vCoh.x - this.x) * this.cohesionCoef;
      let cohVy = (vCoh.y - this.y) * this.cohesionCoef;

      console.log(cohVx, cohVy);
      console.log(vAli.x * this.aliCoef, vAli.y * this.aliCoef);

      this.vx += cohVx + vAli.x * this.aliCoef;
      this.vy += cohVy + vAli.y * this.aliCoef;

    }
  }

  getPosition(){

  }
}
