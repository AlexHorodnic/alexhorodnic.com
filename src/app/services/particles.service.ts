import { Injectable } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {

  constructor() { }

  loadParticles() {
    particlesJS.load("particles-js", "assets/particles.json");
  }

}
