import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  @Input() patients;
  @Output() onSelectPatient = new EventEmitter();

  constructor() {
    this.inputSearch = new FormControl();
   }
  inputSearch;

  selectedPatient(patientId) {
    this.onSelectPatient.emit(patientId);
  }

} 
