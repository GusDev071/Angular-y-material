import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-ep',
  templateUrl: './ep.component.html',
  styleUrls: ['./ep.component.css']
})
export class EpComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
