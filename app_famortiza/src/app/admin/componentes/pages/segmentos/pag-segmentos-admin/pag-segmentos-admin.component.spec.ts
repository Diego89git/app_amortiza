import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSegmentosAdminComponent } from './pag-segmentos-admin.component';

describe('PagSegmentosAdminComponent', () => {
  let component: PagSegmentosAdminComponent;
  let fixture: ComponentFixture<PagSegmentosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagSegmentosAdminComponent]
    });
    fixture = TestBed.createComponent(PagSegmentosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
