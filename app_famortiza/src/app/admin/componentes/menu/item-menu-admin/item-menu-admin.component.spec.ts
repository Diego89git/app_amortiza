import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuAdminComponent } from './item-menu-admin.component';

describe('ItemMenuAdminComponent', () => {
  let component: ItemMenuAdminComponent;
  let fixture: ComponentFixture<ItemMenuAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMenuAdminComponent]
    });
    fixture = TestBed.createComponent(ItemMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
