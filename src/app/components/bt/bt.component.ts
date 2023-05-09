import { Component, Inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';





@Component({
  selector: 'app-bt',
  templateUrl: './bt.component.html',
  styleUrls: ['./bt.component.css']
})
export class BTComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BTComponent);
  }
}

