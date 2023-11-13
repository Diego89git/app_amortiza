import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSegmentosAdmincliComponent } from './form-segmentos-admincli.component';

describe('FormSegmentosAdmincliComponent', () => {
  let component: FormSegmentosAdmincliComponent;
  let fixture: ComponentFixture<FormSegmentosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSegmentosAdmincliComponent]
    });
    fixture = TestBed.createComponent(FormSegmentosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
