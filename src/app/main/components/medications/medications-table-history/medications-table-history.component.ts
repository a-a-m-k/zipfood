import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-medications-table-history',
  templateUrl: './medications-table-history.component.html',
  styleUrls: ['./medications-table-history.component.css']
})
export class MedicationsTableHistoryComponent implements OnChanges {
  @Input() patient;

  constructor() { }
  displayedColumns = ["id", "drugs", "startDate", "doctor", "stopDate", "stopBy"];
  dataSource;

  ngOnChanges() {
    this.dataSource = this.patient.medication.history;
  }

}
