import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTasasAdmincliComponent } from './form-tasas-admincli.component';

describe('FormTasasAdmincliComponent', () => {
  let component: FormTasasAdmincliComponent;
  let fixture: ComponentFixture<FormTasasAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTasasAdmincliComponent]
    });
    fixture = TestBed.createComponent(FormTasasAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
