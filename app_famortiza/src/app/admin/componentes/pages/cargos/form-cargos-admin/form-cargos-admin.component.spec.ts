import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargosAdminComponent } from './form-cargos-admin.component';

describe('FormCargosAdminComponent', () => {
  let component: FormCargosAdminComponent;
  let fixture: ComponentFixture<FormCargosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCargosAdminComponent]
    });
    fixture = TestBed.createComponent(FormCargosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
