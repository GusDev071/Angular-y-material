import {Component} from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-formucampo',
  templateUrl: './formucampo.component.html',
  styleUrls: ['./formucampo.component.css']
})
export class FormucampoComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  hide = true;

  colorControl = new FormControl('primary' as ThemePalette);
}
