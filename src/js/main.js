// import Boid from 'boid/index';
import {boidInit} from './boid/index';

function init() {
  animate();
  boidInit();
}

function animate() {
  window.requestAnimationFrame(animate);
}

init();
