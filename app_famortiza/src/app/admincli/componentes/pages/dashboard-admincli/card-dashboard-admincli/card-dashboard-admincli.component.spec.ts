import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardAdmincliComponent } from './card-dashboard-admincli.component';

describe('CardDashboardAdmincliComponent', () => {
  let component: CardDashboardAdmincliComponent;
  let fixture: ComponentFixture<CardDashboardAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDashboardAdmincliComponent]
    });
    fixture = TestBed.createComponent(CardDashboardAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
