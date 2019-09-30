import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: any[];
  form: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.form);
  }

  onSubmitDynamicForm() {
    console.log(this.form.controls);
  }

  buildForm() {
    const fieldsControl = {};
    this.form = this.formBuilder.group({});
    this.fields.forEach( control => {
      fieldsControl[control.name] = new FormControl(control.value || '', Validators.required);
    });
    this.form = new FormGroup(fieldsControl);
  }
}
