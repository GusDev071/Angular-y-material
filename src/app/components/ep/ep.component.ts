import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-ep',
  templateUrl: './ep.component.html',
  styleUrls: ['./ep.component.css']
})
export class EpComponent {
  panelOpenState = false;
}
