import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDocumentConfigurationsComponent } from './print-document-configurations.component';

describe('PrintDocumentConfigurationsComponent', () => {
  let component: PrintDocumentConfigurationsComponent;
  let fixture: ComponentFixture<PrintDocumentConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDocumentConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDocumentConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
