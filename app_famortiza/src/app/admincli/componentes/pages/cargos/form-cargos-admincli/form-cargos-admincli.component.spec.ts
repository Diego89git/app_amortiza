import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargosAdmincliComponent } from './form-cargos-admincli.component';

describe('FormCargosAdmincliComponent', () => {
  let component: FormCargosAdmincliComponent;
  let fixture: ComponentFixture<FormCargosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCargosAdmincliComponent]
    });
    fixture = TestBed.createComponent(FormCargosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
