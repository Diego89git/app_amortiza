import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAdmincliComponent } from './contenido-admincli.component';

describe('ContenidoAdmincliComponent', () => {
  let component: ContenidoAdmincliComponent;
  let fixture: ComponentFixture<ContenidoAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoAdmincliComponent]
    });
    fixture = TestBed.createComponent(ContenidoAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
