import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSisPresComponent } from './tabla-sis-pres.component';

describe('TablaSisPresComponent', () => {
  let component: TablaSisPresComponent;
  let fixture: ComponentFixture<TablaSisPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSisPresComponent]
    });
    fixture = TestBed.createComponent(TablaSisPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
