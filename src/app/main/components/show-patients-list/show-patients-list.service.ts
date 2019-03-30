import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class ShowPatientsListService {

  constructor() { }

  sortPatientsList(patients) {
    return _.sortBy(patients, ['firstName', 'lastName']);
  }

}
