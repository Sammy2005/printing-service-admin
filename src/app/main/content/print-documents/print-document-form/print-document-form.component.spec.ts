import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDocumentFormComponent } from './print-document-form.component';

describe('PrintDocumentFormComponent', () => {
  let component: PrintDocumentFormComponent;
  let fixture: ComponentFixture<PrintDocumentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDocumentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
