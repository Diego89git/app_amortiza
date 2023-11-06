import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemPresentacionComponent } from './menu-item-presentacion.component';

describe('MenuItemPresentacionComponent', () => {
  let component: MenuItemPresentacionComponent;
  let fixture: ComponentFixture<MenuItemPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemPresentacionComponent]
    });
    fixture = TestBed.createComponent(MenuItemPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
