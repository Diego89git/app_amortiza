import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagUsuariosAdminComponent } from './pag-usuarios-admin.component';

describe('PagUsuariosAdminComponent', () => {
  let component: PagUsuariosAdminComponent;
  let fixture: ComponentFixture<PagUsuariosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagUsuariosAdminComponent]
    });
    fixture = TestBed.createComponent(PagUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
