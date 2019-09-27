import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/services/services.module';
import {Observable} from 'rxjs';
@Component({
  selector: 'gm-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('trash');
  }

}
