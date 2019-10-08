import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, Input, forwardRef} from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})

export class DateInputComponent implements ControlValueAccessor {

  @Input('placeholder') placeholder: string;
  value: Date;
  touched: () => void;
  private onChange = (value: any) => {};

  writeValue(value: Date): void {
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

  onHandleChangeValue(value: Date) {
    console.log(value, 'onChangedValue');
    this.value = value;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
  }
  getValue() {
    return this.value ? this.value : '';
  }
}
