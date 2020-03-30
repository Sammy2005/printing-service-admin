import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingJobLogsDialogComponent } from './printing-job-logs-dialog.component';

describe('PrintingJobLogsDialogComponent', () => {
  let component: PrintingJobLogsDialogComponent;
  let fixture: ComponentFixture<PrintingJobLogsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingJobLogsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingJobLogsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
