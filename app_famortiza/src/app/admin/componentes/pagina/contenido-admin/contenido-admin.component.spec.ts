import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAdminComponent } from './contenido-admin.component';

describe('ContenidoAdminComponent', () => {
  let component: ContenidoAdminComponent;
  let fixture: ComponentFixture<ContenidoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoAdminComponent]
    });
    fixture = TestBed.createComponent(ContenidoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
