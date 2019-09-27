import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/services/services.module';
import {Observable} from 'rxjs';
@Component({
  selector: 'gm-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('sent');
  }

}
