import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bottom-t',
  templateUrl: './bottom-t.component.html',
  styleUrls: ['./bottom-t.component.css']
})
export class BottomTComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
