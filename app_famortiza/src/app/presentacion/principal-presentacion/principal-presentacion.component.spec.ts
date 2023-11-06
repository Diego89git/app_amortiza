import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPresentacionComponent } from './principal-presentacion.component';

describe('PrincipalPresentacionComponent', () => {
  let component: PrincipalPresentacionComponent;
  let fixture: ComponentFixture<PrincipalPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalPresentacionComponent]
    });
    fixture = TestBed.createComponent(PrincipalPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
