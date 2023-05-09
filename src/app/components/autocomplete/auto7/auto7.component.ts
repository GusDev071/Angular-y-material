import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'app-auto7',
  templateUrl: './auto7.component.html',
  styleUrls: ['./auto7.component.css']
})
export class Auto7Component {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
