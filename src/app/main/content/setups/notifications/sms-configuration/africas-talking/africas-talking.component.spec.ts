import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricasTalkingComponent } from './africas-talking.component';

describe('AfricasTalkingComponent', () => {
  let component: AfricasTalkingComponent;
  let fixture: ComponentFixture<AfricasTalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricasTalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricasTalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
