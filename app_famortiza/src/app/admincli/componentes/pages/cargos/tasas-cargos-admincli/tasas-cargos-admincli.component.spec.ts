import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasasCargosAdmincliComponent } from './tasas-cargos-admincli.component';

describe('TasasCargosAdmincliComponent', () => {
  let component: TasasCargosAdmincliComponent;
  let fixture: ComponentFixture<TasasCargosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasasCargosAdmincliComponent]
    });
    fixture = TestBed.createComponent(TasasCargosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
