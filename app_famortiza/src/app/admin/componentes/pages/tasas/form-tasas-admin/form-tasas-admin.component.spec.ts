import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTasasAdminComponent } from './form-tasas-admin.component';

describe('FormTasasAdminComponent', () => {
  let component: FormTasasAdminComponent;
  let fixture: ComponentFixture<FormTasasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTasasAdminComponent]
    });
    fixture = TestBed.createComponent(FormTasasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
