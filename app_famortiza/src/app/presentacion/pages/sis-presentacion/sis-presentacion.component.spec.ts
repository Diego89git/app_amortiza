import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisPresentacionComponent } from './sis-presentacion.component';

describe('SisPresentacionComponent', () => {
  let component: SisPresentacionComponent;
  let fixture: ComponentFixture<SisPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SisPresentacionComponent]
    });
    fixture = TestBed.createComponent(SisPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
