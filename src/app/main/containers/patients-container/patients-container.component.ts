import { Component, OnInit } from '@angular/core';
import { PatientsContainerService } from './patients-container.service';

@Component({
  selector: 'app-patients-container',
  templateUrl: './patients-container.component.html',
  styleUrls: ['./patients-container.component.css']
})
export class PatientsContainerComponent implements OnInit {

  constructor(private PatientsService: PatientsContainerService) { }
  patients;
  selectedPatient;

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.PatientsService.getPatients()
      .subscribe(data => {
        this.patients = [...data];
        this.selectedPatient = !this.selectedPatient ?
          this.patients[0] : this.patients.find(patient => patient.id === this.selectedPatient.id);
      });
  }

  selectPatient(patientId) {
    this.selectedPatient = this.patients.find(patient => patient.id === patientId);
  }

}
