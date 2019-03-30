import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsTableActiveComponent } from './medications-table-active.component';

describe('MedicationsTableActiveComponent', () => {
  let component: MedicationsTableActiveComponent;
  let fixture: ComponentFixture<MedicationsTableActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationsTableActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsTableActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
