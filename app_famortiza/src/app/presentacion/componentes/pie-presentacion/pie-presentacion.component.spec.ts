import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePresentacionComponent } from './pie-presentacion.component';

describe('PiePresentacionComponent', () => {
  let component: PiePresentacionComponent;
  let fixture: ComponentFixture<PiePresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiePresentacionComponent]
    });
    fixture = TestBed.createComponent(PiePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
