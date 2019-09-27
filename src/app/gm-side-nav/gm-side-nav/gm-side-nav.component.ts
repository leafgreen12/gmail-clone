import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gm-side-nav',
  templateUrl: './gm-side-nav.component.html',
  styleUrls: ['./gm-side-nav.component.scss']
})
export class GmSideNavComponent implements OnInit {
  menus: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.menus = [{
      title: 'Inbox',
      link: '/inbox',
      count: 0
    },
    {
      title: 'Starred',
      link: '/starred',
      count: 0
    },
    {
      title: 'Important',
      link: '/important',
      count: 0
    },
    {
      title: 'Sent Mail',
      link: '/sent',
      count: 0
    },
    {
      title: 'Drafts',
      link: '/drafts',
      count: 0
    },
    {
      title: 'Trash',
      link: '/trash',
      count: 0
    }];
  }

}
