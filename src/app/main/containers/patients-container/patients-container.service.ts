import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PatientsContainerService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.patients = [...data];
      this.subject.next(this.patients);
    });
   }
  patients;
  private subject = new Subject<any>();

  getJSON(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/patients`);
  }

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
