import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  destinos =["New York", "Paris", "San Francisco", "Egipto", "Londres", "Italia", "India", "Grecia"];

  lugarContent =["Escapadas al aire libre", "Alojamientos unicos", "Alojamientos enteros", "Con tu mascota"];

  experienciaContent =["Activiadades locales en donde estes", "Visita una ciudad y vive en ella", "Actividades interactivas en linea"];
}
