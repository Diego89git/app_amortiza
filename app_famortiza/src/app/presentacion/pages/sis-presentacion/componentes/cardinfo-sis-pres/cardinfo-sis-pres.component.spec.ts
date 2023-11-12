import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinfoSisPresComponent } from './cardinfo-sis-pres.component';

describe('CardinfoSisPresComponent', () => {
  let component: CardinfoSisPresComponent;
  let fixture: ComponentFixture<CardinfoSisPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardinfoSisPresComponent]
    });
    fixture = TestBed.createComponent(CardinfoSisPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
