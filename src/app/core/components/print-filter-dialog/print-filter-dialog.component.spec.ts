import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFilterDialogComponent } from './print-filter-dialog.component';

describe('PrintFilterDialogComponent', () => {
  let component: PrintFilterDialogComponent;
  let fixture: ComponentFixture<PrintFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
