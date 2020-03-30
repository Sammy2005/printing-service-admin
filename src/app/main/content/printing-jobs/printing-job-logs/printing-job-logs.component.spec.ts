import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingJobLogsComponent } from './printing-job-logs.component';

describe('PrintingJobLogsComponent', () => {
  let component: PrintingJobLogsComponent;
  let fixture: ComponentFixture<PrintingJobLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingJobLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingJobLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
