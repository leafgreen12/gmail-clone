import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import mocks from '../../../mocks/json/primary.json';

import mocks0 from '../../../mocks/json/promotions.json';

import mocks01 from '../../../mocks/json/social.json';

import mocks012 from '../../../mocks/json/starred.json';

import mocks0123 from '../../../mocks/json/important.json';

import mocks01234 from '../../../mocks/json/sent.json';

import mocks012345 from '../../../mocks/json/drafts.json';

import mocks0123456 from '../../../mocks/json/trash.json';

const mockEmails = {
  primary: mocks,
  promotions: mocks0,
  social: mocks01,
  starred: mocks012,
  important: mocks0123,
  sent: mocks01234,
  drafts: mocks012345,
  trash: mocks0123456
};


@Injectable()
export class EmailService {

  constructor() {}

  getEmails(section: string): Observable<any[]> {
    return mockEmails.hasOwnProperty(section) ? mockEmails[section] : [];
  }

  getEmail(section: string, id: number): Observable<any[]> {
    return mockEmails[section].find((email) => email.id === id);
  }
}
