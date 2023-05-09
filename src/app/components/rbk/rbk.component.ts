import { Component } from '@angular/core';

@Component({
  selector: 'app-rbk',
  templateUrl: './rbk.component.html',
  styleUrls: ['./rbk.component.css']
})
export class RbkComponent {
  favoriteSeason: string = ''; // Inicializa la variable favoriteSeason con una cadena vacía
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

