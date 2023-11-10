import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTasasAdminComponent } from './tabla-tasas-admin.component';

describe('TablaTasasAdminComponent', () => {
  let component: TablaTasasAdminComponent;
  let fixture: ComponentFixture<TablaTasasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTasasAdminComponent]
    });
    fixture = TestBed.createComponent(TablaTasasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
