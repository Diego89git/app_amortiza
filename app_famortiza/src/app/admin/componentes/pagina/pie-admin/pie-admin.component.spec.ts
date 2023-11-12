import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAdminComponent } from './pie-admin.component';

describe('PieAdminComponent', () => {
  let component: PieAdminComponent;
  let fixture: ComponentFixture<PieAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieAdminComponent]
    });
    fixture = TestBed.createComponent(PieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
