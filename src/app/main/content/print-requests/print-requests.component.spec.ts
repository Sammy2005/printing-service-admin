import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRequestsComponent } from './print-requests.component';

describe('PrintRequestsComponent', () => {
  let component: PrintRequestsComponent;
  let fixture: ComponentFixture<PrintRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
