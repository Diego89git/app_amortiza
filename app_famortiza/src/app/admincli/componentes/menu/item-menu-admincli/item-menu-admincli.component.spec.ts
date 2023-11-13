import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuAdmincliComponent } from './item-menu-admincli.component';

describe('ItemMenuAdmincliComponent', () => {
  let component: ItemMenuAdmincliComponent;
  let fixture: ComponentFixture<ItemMenuAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMenuAdmincliComponent]
    });
    fixture = TestBed.createComponent(ItemMenuAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
