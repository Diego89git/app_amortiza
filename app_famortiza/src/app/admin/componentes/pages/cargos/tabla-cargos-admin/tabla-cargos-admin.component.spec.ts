import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCargosAdminComponent } from './tabla-cargos-admin.component';

describe('TablaCargosAdminComponent', () => {
  let component: TablaCargosAdminComponent;
  let fixture: ComponentFixture<TablaCargosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCargosAdminComponent]
    });
    fixture = TestBed.createComponent(TablaCargosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
