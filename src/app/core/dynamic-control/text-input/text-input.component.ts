import {FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, OnInit, Input, forwardRef} from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})

export class TextInputComponent implements ControlValueAccessor {

  @Input('placeholder') placeholder: string;
  value: string;
  touched: () => void;
  private onChange = (value: any) => {};

  writeValue(value: string): void {
    this.value = value;
    console.log(value, 'writeValue');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(fn, 'registerOnChange fn');
    console.log(this.onChange, 'registerOnChange onChange');
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
    console.log(this.touched);
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onHandleChangeValue(value: string) {
    console.log(value, 'onChangedValue');
    this.value = value;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
  }
}
