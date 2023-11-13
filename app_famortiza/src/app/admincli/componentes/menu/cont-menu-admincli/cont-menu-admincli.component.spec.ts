import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContMenuAdmincliComponent } from './cont-menu-admincli.component';

describe('ContMenuAdmincliComponent', () => {
  let component: ContMenuAdmincliComponent;
  let fixture: ComponentFixture<ContMenuAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContMenuAdmincliComponent]
    });
    fixture = TestBed.createComponent(ContMenuAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
