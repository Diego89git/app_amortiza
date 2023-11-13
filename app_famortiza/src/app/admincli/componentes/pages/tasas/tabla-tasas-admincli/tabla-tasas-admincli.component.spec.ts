import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTasasAdmincliComponent } from './tabla-tasas-admincli.component';

describe('TablaTasasAdmincliComponent', () => {
  let component: TablaTasasAdmincliComponent;
  let fixture: ComponentFixture<TablaTasasAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTasasAdmincliComponent]
    });
    fixture = TestBed.createComponent(TablaTasasAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
