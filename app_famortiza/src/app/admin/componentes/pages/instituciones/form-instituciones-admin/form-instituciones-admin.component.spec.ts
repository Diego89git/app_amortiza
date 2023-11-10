import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstitucionesAdminComponent } from './form-instituciones-admin.component';

describe('FormInstitucionesAdminComponent', () => {
  let component: FormInstitucionesAdminComponent;
  let fixture: ComponentFixture<FormInstitucionesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInstitucionesAdminComponent]
    });
    fixture = TestBed.createComponent(FormInstitucionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
