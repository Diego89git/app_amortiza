import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdmincliComponent } from './principal-admincli.component';

describe('PrincipalAdmincliComponent', () => {
  let component: PrincipalAdmincliComponent;
  let fixture: ComponentFixture<PrincipalAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalAdmincliComponent]
    });
    fixture = TestBed.createComponent(PrincipalAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
