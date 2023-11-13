import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCargosAdmincliComponent } from './pag-cargos-admincli.component';

describe('PagCargosAdmincliComponent', () => {
  let component: PagCargosAdmincliComponent;
  let fixture: ComponentFixture<PagCargosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCargosAdmincliComponent]
    });
    fixture = TestBed.createComponent(PagCargosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
