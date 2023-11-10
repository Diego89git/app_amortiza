import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuariosAdminComponent } from './form-usuarios-admin.component';

describe('FormUsuariosAdminComponent', () => {
  let component: FormUsuariosAdminComponent;
  let fixture: ComponentFixture<FormUsuariosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUsuariosAdminComponent]
    });
    fixture = TestBed.createComponent(FormUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
