import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmincliComponent } from './dashboard-admincli.component';

describe('DashboardAdmincliComponent', () => {
  let component: DashboardAdmincliComponent;
  let fixture: ComponentFixture<DashboardAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmincliComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
