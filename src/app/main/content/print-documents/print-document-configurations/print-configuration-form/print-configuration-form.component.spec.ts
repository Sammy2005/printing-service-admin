import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintConfigurationFormComponent } from './print-configuration-form.component';

describe('PrintConfigurationFormComponent', () => {
  let component: PrintConfigurationFormComponent;
  let fixture: ComponentFixture<PrintConfigurationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintConfigurationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintConfigurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
