import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnChanges {

  @Input() patient;

  fullName;
  initials;
  iconColor;

  ngOnChanges() {
    this.fullName = this.getFullName();
    this.initials = this.getInitials();
    this.iconColor = this.getIconColor();
  }

  getFullName() {
    return `${this.patient.firstName} ${this.patient.lastName}`;
  }

  getInitials() {
    const { firstName, lastName } = this.patient;
    const getFirstSymbol = (item) => item[0];
    return `${getFirstSymbol(firstName)}${getFirstSymbol(lastName)}`;
  }

  getIconColor() {
    return (this.patient.sex === 'male') ? 'lightSkyBlue' : 'pink';
  }
}
