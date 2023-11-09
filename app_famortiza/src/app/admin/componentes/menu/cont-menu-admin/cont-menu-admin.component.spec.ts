import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContMenuAdminComponent } from './cont-menu-admin.component';

describe('ContMenuAdminComponent', () => {
  let component: ContMenuAdminComponent;
  let fixture: ComponentFixture<ContMenuAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContMenuAdminComponent]
    });
    fixture = TestBed.createComponent(ContMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
