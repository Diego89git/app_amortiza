import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRolesAdminComponent } from './pag-roles-admin.component';

describe('PagRolesAdminComponent', () => {
  let component: PagRolesAdminComponent;
  let fixture: ComponentFixture<PagRolesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagRolesAdminComponent]
    });
    fixture = TestBed.createComponent(PagRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
