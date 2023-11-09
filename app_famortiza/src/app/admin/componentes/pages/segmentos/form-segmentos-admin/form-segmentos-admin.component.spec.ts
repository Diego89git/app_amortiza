import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSegmentosAdminComponent } from './form-segmentos-admin.component';

describe('FormSegmentosAdminComponent', () => {
  let component: FormSegmentosAdminComponent;
  let fixture: ComponentFixture<FormSegmentosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSegmentosAdminComponent]
    });
    fixture = TestBed.createComponent(FormSegmentosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
