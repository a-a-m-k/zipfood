import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { environment } from './../../../../assets/patients.json' ;


@Injectable()
export class PatientsContainerService {

  constructor(private http: HttpClient) {
    this.http.get('./../../../../assets/patients.json').subscribe(data => {
      this.patients = data as string [];
      this.subject.next(this.patients);
    });
   }
  patients;
  private subject = new Subject<any>();

  updatePatients(updatedPatient) {
    this.patients = this.patients.map(patient => {
      return (updatedPatient.id === patient.id) ? {...updatedPatient} : patient;
    });
    this.subject.next(this.patients);
  }

  getPatients(): Observable<any> {
    return this.subject.asObservable();
  }

}
