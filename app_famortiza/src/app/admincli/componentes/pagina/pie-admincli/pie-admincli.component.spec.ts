import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAdmincliComponent } from './pie-admincli.component';

describe('PieAdmincliComponent', () => {
  let component: PieAdmincliComponent;
  let fixture: ComponentFixture<PieAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieAdmincliComponent]
    });
    fixture = TestBed.createComponent(PieAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
