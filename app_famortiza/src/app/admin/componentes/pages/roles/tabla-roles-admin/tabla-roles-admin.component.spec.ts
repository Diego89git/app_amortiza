import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRolesAdminComponent } from './tabla-roles-admin.component';

describe('TablaRolesAdminComponent', () => {
  let component: TablaRolesAdminComponent;
  let fixture: ComponentFixture<TablaRolesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaRolesAdminComponent]
    });
    fixture = TestBed.createComponent(TablaRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
