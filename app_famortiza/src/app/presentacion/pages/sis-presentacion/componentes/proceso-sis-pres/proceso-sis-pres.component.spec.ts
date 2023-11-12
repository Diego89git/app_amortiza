import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoSisPresComponent } from './proceso-sis-pres.component';

describe('ProcesoSisPresComponent', () => {
  let component: ProcesoSisPresComponent;
  let fixture: ComponentFixture<ProcesoSisPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoSisPresComponent]
    });
    fixture = TestBed.createComponent(ProcesoSisPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
