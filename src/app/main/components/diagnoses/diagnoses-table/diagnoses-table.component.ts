import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsContainerService } from '../../../containers/patients-container/patients-container.service';


@Component({
  selector: 'app-diagnoses-table',
  templateUrl: './diagnoses-table.component.html',
  styleUrls: ['./diagnoses-table.component.css']
})
export class DiagnosesTableComponent implements OnChanges {

  constructor(
    private fb: FormBuilder,
    private PatientsService: PatientsContainerService ) {
    this.createForm();
    }

  @Input() patient;

  myForm: FormGroup;
  displayedColumns: string[] = ['name', 'diagnose', 'date', 'resolved', 'actions'];
  dataSource;
  rowToEdit;
  selectedDiagnose;
  diagnoses;

  ngOnChanges() {
    this.rowToEdit = null;
    this.dataSource = this.patient.diagnoses;
    this.diagnoses = this.patient.diagnoses;
  }

  createForm() {
    this.myForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(2)]],
      diagnose: ['', Validators.required],
      date: '',
      resolved: ''
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.diagnoses = this.diagnoses.map(item => item.id === this.rowToEdit ? { ...form.value } : item);
      this.patient = { ...this.patient, diagnoses: this.diagnoses };
      this.PatientsService.updatePatients(this.patient);
      this.rowToEdit = null;
    }
  }

  cancel() {
    this.rowToEdit = null;
  }

  selectDiagnose(id) {
    if (this.rowToEdit !== id) {
      this.rowToEdit = id;
      this.selectedDiagnose = this.patient.diagnoses.filter((item) => {
        return item.id === id;
      });
      this.myForm.setValue({
        id: this.selectedDiagnose[0].id,
        name: this.selectedDiagnose[0].name,
        diagnose: this.selectedDiagnose[0].diagnose,
        date: this.selectedDiagnose[0].date,
        resolved: this.selectedDiagnose[0].resolved
      });
    }
  }

}
