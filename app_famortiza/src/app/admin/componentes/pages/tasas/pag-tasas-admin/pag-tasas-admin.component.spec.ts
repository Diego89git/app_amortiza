import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTasasAdminComponent } from './pag-tasas-admin.component';

describe('PagTasasAdminComponent', () => {
  let component: PagTasasAdminComponent;
  let fixture: ComponentFixture<PagTasasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagTasasAdminComponent]
    });
    fixture = TestBed.createComponent(PagTasasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
