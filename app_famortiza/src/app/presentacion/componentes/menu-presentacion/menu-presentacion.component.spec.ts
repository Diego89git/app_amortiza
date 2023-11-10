import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPresentacionComponent } from './menu-presentacion.component';

describe('MenuPresentacionComponent', () => {
  let component: MenuPresentacionComponent;
  let fixture: ComponentFixture<MenuPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPresentacionComponent]
    });
    fixture = TestBed.createComponent(MenuPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
