import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoPresentacionComponent } from './acceso-presentacion.component';

describe('AccesoPresentacionComponent', () => {
  let component: AccesoPresentacionComponent;
  let fixture: ComponentFixture<AccesoPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoPresentacionComponent]
    });
    fixture = TestBed.createComponent(AccesoPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
