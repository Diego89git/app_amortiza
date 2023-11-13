import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCargosAdmincliComponent } from './tabla-cargos-admincli.component';

describe('TablaCargosAdmincliComponent', () => {
  let component: TablaCargosAdmincliComponent;
  let fixture: ComponentFixture<TablaCargosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCargosAdmincliComponent]
    });
    fixture = TestBed.createComponent(TablaCargosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
