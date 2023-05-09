import { Component } from '@angular/core';

@Component({
  selector: 'app-rpp',
  templateUrl: './rpp.component.html',
  styleUrls: ['./rpp.component.css']
})
export class RppComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 10; // Inicializa la variable radius con un valor de 10
  color: string = '#000'; // Inicializa la variable color con un valor hexadecimal de color negro
}

