import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, forwardRef, Input} from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})

export class SelectInputComponent implements ControlValueAccessor {

  @Input() values: any[];
  value: string;
  test: () => void;
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
    this.test = fn;
    console.log(this.test);
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onHandleChangeValue(value: any) {
    console.log(value, 'onChangedValue');
    this.value = value;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
  }
}
