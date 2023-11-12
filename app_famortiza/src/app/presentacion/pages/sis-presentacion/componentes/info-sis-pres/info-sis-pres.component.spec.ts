import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSisPresComponent } from './info-sis-pres.component';

describe('InfoSisPresComponent', () => {
  let component: InfoSisPresComponent;
  let fixture: ComponentFixture<InfoSisPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSisPresComponent]
    });
    fixture = TestBed.createComponent(InfoSisPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
