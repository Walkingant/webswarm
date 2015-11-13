// import Boid from 'boid/index';
import {boidInit} from './boid/index';
import {Boid} from './boid/boid.js';


function init() {
  animate();
  boidInit();
}

function animate() {
  window.requestAnimationFrame(animate);
}

init();
