import d3 from 'd3';
import _ from 'lodash';

const boidCount = 10;
const degrees = 180 / Math.PI;
const VISION_RADIUS = 20;
const BODY_RADIUS = 5;

function collide(node, points){
    var trans = d3.transform(d3.select(node).attr("transform")).translate,
      x1 = trans[0],
      x2 = trans[0] + (+d3.select(node).attr("r")),
      y1 = trans[1],
      y2 = trans[1] + (+d3.select(node).attr("r"));

  var colliding = false;
  points.each(function(d,i){
    var ntrans = d3.transform(d3.select(this).attr("transform")).translate,
      nx1 = ntrans[0],
      nx2 = ntrans[0] + (+d3.select(this).attr("r")),
      ny1 = ntrans[1],
      ny2 = ntrans[1] + (+d3.select(this).attr("r"));


      if(!(x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1))
        colliding=true;
  })
  return colliding;
}

export function boidInit() {
  let boids = createBoids(20);
}

function createBoids(count = 1) {
  var boids = [];
  d3.range(count).map(() => {
    var position = {
      x: Math.random() * 600,
      y: Math.random() * 400
    };
    boids.push(drawBoid(position));
  });
  return boids;
}

function drawBoid(position = {x: 300, y:300}) {
  var svg = d3.select("#main-svg").append("g").attr("class", "boid-container");
  svg
    .append("circle")
    .attr({
      cx: position.x,
      cy: position.y,
      r: BODY_RADIUS,
      fill: "yellow"
    })
    .attr("class", "boid");
svg
    .append("circle")
    .attr({
      cx: position.x,
      cy: position.y,
      r: VISION_RADIUS,
      fill: "#b1b1b1",
      opacity: 0.5
    });

    return svg;
}

function move() {

}
