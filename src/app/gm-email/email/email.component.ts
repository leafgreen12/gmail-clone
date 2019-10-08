import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmailService } from '../../shared/services/services.module';
@Component({
  selector: 'app-gm-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  email: Object;

  constructor(private location: Location, private route: ActivatedRoute, private emailService: EmailService ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {

      const section = params.hasOwnProperty('subSection') ? params.subSection : params.section;
      console.log(params);

      this.email = this.emailService.getEmail(section, params.id);

    });
    this.route.queryParams.subscribe(params => {
        console.log(params);
      });

  }

  goBack() {
    this.location.back();
  }

}
