import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolesAdminComponent } from './form-roles-admin.component';

describe('FormRolesAdminComponent', () => {
  let component: FormRolesAdminComponent;
  let fixture: ComponentFixture<FormRolesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRolesAdminComponent]
    });
    fixture = TestBed.createComponent(FormRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
