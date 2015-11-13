import d3 from 'd3';

export function boidInit() {
  createBoid();
}

function createBoid() {
  drawBoid();
}

function drawBoid() {
  var svg = d3.select("#main-svg");
  svg
    .append("circle")
    .attr({
      cx: 50,
      cy: 50,
      r: 10,
      fill: "yellow"
    });
}
