import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInstitucionesAdminComponent } from './pag-instituciones-admin.component';

describe('PagInstitucionesAdminComponent', () => {
  let component: PagInstitucionesAdminComponent;
  let fixture: ComponentFixture<PagInstitucionesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagInstitucionesAdminComponent]
    });
    fixture = TestBed.createComponent(PagInstitucionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
