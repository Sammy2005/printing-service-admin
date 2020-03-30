import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationJobsListComponent } from './notification-jobs-list.component';

describe('NotificationJobsListComponent', () => {
  let component: NotificationJobsListComponent;
  let fixture: ComponentFixture<NotificationJobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationJobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
