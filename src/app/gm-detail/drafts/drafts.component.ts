import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/services/services.module';
import {Observable} from 'rxjs';

@Component({
  selector: 'gm-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('drafts');
  }

}
