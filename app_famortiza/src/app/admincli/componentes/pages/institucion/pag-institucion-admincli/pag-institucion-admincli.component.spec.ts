import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInstitucionAdmincliComponent } from './pag-institucion-admincli.component';

describe('PagInstitucionAdmincliComponent', () => {
  let component: PagInstitucionAdmincliComponent;
  let fixture: ComponentFixture<PagInstitucionAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagInstitucionAdmincliComponent]
    });
    fixture = TestBed.createComponent(PagInstitucionAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
