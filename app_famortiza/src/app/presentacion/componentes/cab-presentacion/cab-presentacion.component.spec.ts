import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabPresentacionComponent } from './cab-presentacion.component';

describe('CabPresentacionComponent', () => {
  let component: CabPresentacionComponent;
  let fixture: ComponentFixture<CabPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabPresentacionComponent]
    });
    fixture = TestBed.createComponent(CabPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
