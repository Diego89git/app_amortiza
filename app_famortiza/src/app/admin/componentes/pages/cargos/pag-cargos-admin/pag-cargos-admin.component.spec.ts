import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCargosAdminComponent } from './pag-cargos-admin.component';

describe('PagCargosAdminComponent', () => {
  let component: PagCargosAdminComponent;
  let fixture: ComponentFixture<PagCargosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCargosAdminComponent]
    });
    fixture = TestBed.createComponent(PagCargosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
