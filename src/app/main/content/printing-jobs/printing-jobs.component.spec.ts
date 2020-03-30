import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingJobsComponent } from './printing-jobs.component';

describe('PrintingJobsComponent', () => {
  let component: PrintingJobsComponent;
  let fixture: ComponentFixture<PrintingJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
