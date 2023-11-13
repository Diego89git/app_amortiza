import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSegmentosAdmincliComponent } from './tabla-segmentos-admincli.component';

describe('TablaSegmentosAdmincliComponent', () => {
  let component: TablaSegmentosAdmincliComponent;
  let fixture: ComponentFixture<TablaSegmentosAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSegmentosAdmincliComponent]
    });
    fixture = TestBed.createComponent(TablaSegmentosAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
