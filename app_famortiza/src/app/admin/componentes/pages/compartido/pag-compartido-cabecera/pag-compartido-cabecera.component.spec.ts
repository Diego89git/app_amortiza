import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCompartidoCabeceraComponent } from './pag-compartido-cabecera.component';

describe('PagCompartidoCabeceraComponent', () => {
  let component: PagCompartidoCabeceraComponent;
  let fixture: ComponentFixture<PagCompartidoCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCompartidoCabeceraComponent]
    });
    fixture = TestBed.createComponent(PagCompartidoCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
