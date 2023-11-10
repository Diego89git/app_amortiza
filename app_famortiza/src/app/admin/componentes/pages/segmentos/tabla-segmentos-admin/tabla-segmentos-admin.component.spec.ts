import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSegmentosAdminComponent } from './tabla-segmentos-admin.component';

describe('TablaSegmentosAdminComponent', () => {
  let component: TablaSegmentosAdminComponent;
  let fixture: ComponentFixture<TablaSegmentosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSegmentosAdminComponent]
    });
    fixture = TestBed.createComponent(TablaSegmentosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
