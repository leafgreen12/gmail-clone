import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      type: 'date',
      name: 'date',
      label: 'Date',
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
        { id: 1, name: 'Hà Nội'},
        { id: 2, name: 'TP Hồ Chí Minh'},
        { id: 3, name: 'Đà Nẵng'},
        { id: 4, name: 'Lào Cai'},
        { id: 5, name: 'Yên Bái'},
        { id: 6, name: 'Quảng Bình'},
        { id: 7, name: 'Thái Nguyên'},
        { id: 8, name: 'Daklak'},
        { id: 9, name: 'Nghệ An'},
        { id: 10, name: 'Hà Tĩnh'}
      ]
    },
    {
      type: 'multipleSelect',
      name: 'countryMultiple',
      label: 'Country',
      value: [],
      required: true,
      options: [
        { id: 1, name: 'Hà Nội'},
        { id: 2, name: 'TP Hồ Chí Minh'},
        { id: 3, name: 'Đà Nẵng'},
        { id: 4, name: 'Lào Cai'},
        { id: 5, name: 'Yên Bái'},
        { id: 6, name: 'Quảng Bình'},
        { id: 7, name: 'Thái Nguyên'},
        { id: 8, name: 'Daklak'},
        { id: 9, name: 'Nghệ An'},
        { id: 10, name: 'Hà Tĩnh'}
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
  ];
  constructor() { }

  ngOnInit() {}
}
