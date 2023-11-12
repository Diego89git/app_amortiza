import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInstitucionesAdminComponent } from './tabla-instituciones-admin.component';

describe('TablaInstitucionesAdminComponent', () => {
  let component: TablaInstitucionesAdminComponent;
  let fixture: ComponentFixture<TablaInstitucionesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaInstitucionesAdminComponent]
    });
    fixture = TestBed.createComponent(TablaInstitucionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
