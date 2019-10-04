import {FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, OnInit, Input, forwardRef} from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})

export class FileInputComponent implements ControlValueAccessor {

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

  onFileChange(event) {
    console.log(event, 'onChangedValue');
    this.value = event.target.files;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
  }
}
