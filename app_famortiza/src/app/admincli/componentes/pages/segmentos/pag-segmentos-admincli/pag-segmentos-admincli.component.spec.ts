import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSegmentosAdmincliComponent } from './pag-segmentos-admincli.component';

describe('PagSegmentosAdmincliComponent', () => {
  let component: PagSegmentosAdmincliComponent;
  let fixture: ComponentFixture<PagSegmentosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagSegmentosAdmincliComponent]
    });
    fixture = TestBed.createComponent(PagSegmentosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
