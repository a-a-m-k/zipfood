import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientsContainerService } from '../../../containers/patients-container/patients-container.service';

@Component({
  selector: 'app-medications-table-active',
  templateUrl: './medications-table-active.component.html',
  styleUrls: ['./medications-table-active.component.css']
})
export class MedicationsTableActiveComponent implements OnChanges {
  @Input() patient;

  constructor(
    private PatientsContainerService: PatientsContainerService,
    private formBuilder: FormBuilder
  ) {
      this.medicationsActiveForm = this.formBuilder.group({
        doctor: [null, [Validators.required]],
        drugs: [null, [Validators.required]],
        sig: [null, [Validators.required, Validators.minLength(5)]]
      });
    }
  displayedColumns = ["id", "date", "doctor", "drugs", "actions"];
  dataSource;
  medicationsActiveForm: FormGroup;
  rowToEdit;
  selectedMedication;
  updatedMedication;
  
  ngOnChanges() {
    this.dataSource = this.patient.medication.active;
    this.rowToEdit = null;
  }

  moveActiveMedicationToHistory(medicationId) {
    const currentActiveMedication = this.findMedicationById(medicationId);
    const medicationToHistory = {
      id: currentActiveMedication[0].id,
      startDate: currentActiveMedication[0].date,
      status: "history",
      doctor: currentActiveMedication[0].doctor,
      stopDate: new Date(),
      stopBy: currentActiveMedication[0].doctor,
      drugs: currentActiveMedication[0].drugs
    };  

    let currentPatient = {...this.patient};
    const newMedicationsActive = currentPatient.medication.active.filter(medication => {
      return medication.id !== medicationId;
    });
    const newMedicationsHistory = [...currentPatient.medication.history, medicationToHistory];

    currentPatient = { 
      ...currentPatient, 
      medication: { 
        active: [...newMedicationsActive],
        history: [...newMedicationsHistory]
      }
    };

    this.PatientsContainerService.updatePatients(currentPatient);
  }

  onSubmit(form) {
    if (form.valid) { 
      this.updatedMedication = {
        id: this.selectedMedication[0].id,
        date: this.selectedMedication[0].date,
        status: this.selectedMedication[0].status,
        ...form.value
      };

      const currentPatient = {...this.patient};
      currentPatient.medication.active = currentPatient.medication.active.map(medication => {
        return (this.updatedMedication.id === medication.id) ? this.updatedMedication : medication;
      });

      this.PatientsContainerService.updatePatients(currentPatient);
      this.rowToEdit = null;
    }   
  }

  cancel() {
    this.rowToEdit = null;
  }

  editActiveMedication(selectedMedicationId) {
    if (this.rowToEdit !== selectedMedicationId) {
      this.selectedMedication = this.findMedicationById(selectedMedicationId);
      this.rowToEdit = selectedMedicationId;

      this.medicationsActiveForm.setValue({
        doctor: this.selectedMedication[0].doctor,
        drugs: this.selectedMedication[0].drugs,
        sig: this.selectedMedication[0].sig 
      });
    }
  }

  findMedicationById(medicationId) {
    return this.patient.medication.active.filter((medication) => {
      return medication.id === medicationId;
    });
  }

}
