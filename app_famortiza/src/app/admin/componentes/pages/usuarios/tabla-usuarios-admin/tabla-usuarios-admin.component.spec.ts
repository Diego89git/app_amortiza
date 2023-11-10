import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuariosAdminComponent } from './tabla-usuarios-admin.component';

describe('TablaUsuariosAdminComponent', () => {
  let component: TablaUsuariosAdminComponent;
  let fixture: ComponentFixture<TablaUsuariosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaUsuariosAdminComponent]
    });
    fixture = TestBed.createComponent(TablaUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
