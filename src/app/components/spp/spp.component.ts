import {Component} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperIntl} from '@angular/material/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-spp',
  templateUrl: './spp.component.html',
  styleUrls: ['./spp.component.css']
})
export class SppComponent {
  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl,breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  firstFormGroup1 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup1 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation!: Observable<StepperOrientation>;
  isEditable = false;
  isOptional = false;
  isLinear = false;
  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }
}
