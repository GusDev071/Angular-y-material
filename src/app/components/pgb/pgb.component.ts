import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-pgb',
  templateUrl: './pgb.component.html',
  styleUrls: ['./pgb.component.css']
})
export class PgbComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
