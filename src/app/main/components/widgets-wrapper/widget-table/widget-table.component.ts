import { Component, Input, OnChanges, Inject } from '@angular/core';
import { CONSTANT_TOKEN } from './widget-table.constant';
import { NamesBtn } from './widget-table.interfaces';

  @Component({
    selector: 'app-widget-table',
    templateUrl: './widget-table.component.html',
    styleUrls: ['./widget-table.component.css']
  })
export class WidgetTableComponent implements  OnChanges {

  @Input() patient;

  namebtnDiagnoses: string = this.constant.previous;
  namebtnMedication: string = this.constant.previous;
  patientDiagnoseData: Date;
  patientMedicationDrugs: string;
  private indexDiagnoses = 0;
  private indexMedication = 0;
  dataSourceMedication: any;
  dataSourceDiagnose: any;
  patientDiagnoseDiagnose: string;
  patientMedicationDate: Date;
  displayedColumnsMedication = ['date', 'drugs'];
  displayedColumnsDiagnoses = ['date', 'diagnose'];

  constructor(@Inject(CONSTANT_TOKEN) private constant: NamesBtn) { }
     
  ngOnChanges(){
    if (this.patient.diagnoses[0]) { 
      this.patientDiagnoseData = this.patient.diagnoses[this.indexDiagnoses].date;
      this.patientDiagnoseDiagnose = this.patient.diagnoses[this.indexDiagnoses].diagnose;
    }
    
    if (this.patient.medication.active[0]) {
      this.patientMedicationDrugs = this.patient.medication.active[this.indexMedication].drugs;
      this.patientMedicationDate = this.patient.medication.active[this.indexMedication].date;
    }   
    
    this.dataSourceMedication = [
      {date: `${this.patientMedicationDate}`, drugs: `${this.patientMedicationDrugs}`}
    ];

    this.dataSourceDiagnose = [
      {date: `${this.patientDiagnoseData}`, diagnose: `${this.patientDiagnoseDiagnose}`}
    ];
  }

  previousLatestMedication() {
    this.namebtnMedication = (this.namebtnMedication === this.constant.previous) ? this.constant.latest : this.constant.previous;
    this.indexMedication = (this.namebtnMedication === this.constant.latest) ? 1 : 0;
    this.ngOnChanges();
  }

  previousLatestDiagnoses() {
    this.namebtnDiagnoses = (this.namebtnDiagnoses === this.constant.previous) ? this.constant.latest : this.constant.previous;
    this.indexDiagnoses = (this.namebtnDiagnoses === this.constant.latest) ? 1 : 0;
    this.ngOnChanges();
  }

}







