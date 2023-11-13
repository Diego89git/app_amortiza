import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTasasAdmincliComponent } from './pag-tasas-admincli.component';

describe('PagTasasAdmincliComponent', () => {
  let component: PagTasasAdmincliComponent;
  let fixture: ComponentFixture<PagTasasAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagTasasAdmincliComponent]
    });
    fixture = TestBed.createComponent(PagTasasAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
