import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, forwardRef, Input} from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'app-multiple-select-input',
  templateUrl: './multiple-select-input.component.html',
  styleUrls: ['./multiple-select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleSelectInputComponent),
      multi: true
    }
  ]
})

export class MultipleSelectInputComponent implements ControlValueAccessor {

  @Input() values: any[];
  value: any[];
  touched: () => void;
  private onChange = (value: any) => {};

  writeValue(value: any[]): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onHandleChangeValue(value: any) {
    this.value = value;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
  }
}
