import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'gm-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: '',
      required: true,
      options: [
        { id: 1, name: 'Hà Nội', type: 'central' },
        { id: 2, name: 'TP Hồ Chí Minh', type: 'central' },
        { id: 3, name: 'Đà Nẵng', type: 'central' },
        { id: 4, name: 'Lào Cai', type: 'province' },
        { id: 5, name: 'Yên Bái', type: 'province' },
        { id: 6, name: 'Quảng Bình', type: 'province' },
        { id: 7, name: 'Thái Nguyên', type: 'province' },
        { id: 8, name: 'Daklak', type: 'province' },
        { id: 9, name: 'Nghệ An', type: 'province' },
        { id: 10, name: 'Hà Tĩnh', type: 'province' }
      ]
    },
    // {
    //   type: 'radio',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'm', label: 'Male' },
    //     { key: 'f', label: 'Female' }
    //   ]
    // },
    // {
    //   type: 'checkbox',
    //   name: 'hobby',
    //   label: 'Hobby',
    //   required: true,
    //   options: [
    //     { key: 'f', label: 'Fishing' },
    //     { key: 'c', label: 'Cooking' }
    //   ]
    // }
  ];

  ngOnInit() {
  }
}
