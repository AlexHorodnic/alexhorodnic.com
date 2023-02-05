import { Component, OnInit } from '@angular/core';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private particlesService: ParticlesService) { }

  ngOnInit(): void {
    this.particlesService.loadParticles();
  }

}
