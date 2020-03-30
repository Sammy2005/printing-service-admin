import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobipComponent } from './infobip.component';

describe('InfobipComponent', () => {
  let component: InfobipComponent;
  let fixture: ComponentFixture<InfobipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
