import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ShowPatientsListService } from './show-patients-list.service';

@Component({
  selector: 'app-show-patients-list',
  templateUrl: './show-patients-list.component.html',
  styleUrls: ['./show-patients-list.component.css']
})
export class ShowPatientsListComponent implements OnChanges {
  @Input() patients;
  @Output() onSelectPatient = new EventEmitter();

  constructor(private showPatientsListService: ShowPatientsListService) { }
  sortedPatients;
  selectedPatient;
  
  ngOnChanges(changes) {
    if (changes.patients.currentValue) {
      this.sortedPatients = this.showPatientsListService.sortPatientsList(this.patients);
    }
  }

  selectPatient(patientId) {
    this.selectedPatient = patientId;
    this.onSelectPatient.emit(patientId);
  }

  isActive(id) {
    return this.selectedPatient === id;
  }

  trackById(index, patient) {
    return patient.id;
  }

}
