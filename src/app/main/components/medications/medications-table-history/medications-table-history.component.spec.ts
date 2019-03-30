import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsTableHistoryComponent } from './medications-table-history.component';

describe('MedicationsTableHistoryComponent', () => {
  let component: MedicationsTableHistoryComponent;
  let fixture: ComponentFixture<MedicationsTableHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationsTableHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsTableHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
