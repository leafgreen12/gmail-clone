import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {Validates} from '../../validators/Validates.validator';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: any[];
  form: FormGroup;
  items: FormArray;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmitDynamicForm() {
    console.log(this.form.controls);
  }

  buildForm() {
    const fieldsControl = {};
    this.form = this.formBuilder.group({});
    this.fields.forEach( control => {
      switch (control.name) {
        case 'firstName' || 'lastName':
          fieldsControl[control.name] = new FormControl(control.value || '', [ Validators.required, Validates.ValidateName ]);
          break;
        case 'email':
          fieldsControl[control.name] = new FormControl(control.value || '', [ Validators.required, Validates.ValidateEmail ]);
          break;
        case 'multipleSelect':
          fieldsControl[control.name] = new FormControl(control.value || [], [ Validators.required ]);
          break;
        default:
          fieldsControl[control.name] = new FormControl(control.value || '', Validators.required);
          break;
      }
    });
    fieldsControl['formArray'] = new FormArray([]);
    fieldsControl['fileUpload'] = new FormControl('', Validators.required);
    this.form = new FormGroup(fieldsControl);
    console.log(this.form);
  }

  createItem(item?: any): FormGroup {
    return this.formBuilder.group({
      key: [ item ? item.key : null, Validators.required ],
      value: [ item ? item.value : null, Validators.required ],
    });
  }

  addItem(item?: any): void {
    this.items = this.form.get('formArray') as FormArray;
    this.items.push(this.createItem(item));
  }

  removeItem(indexSetting: number) {
    this.items.removeAt(indexSetting);
  }
}
