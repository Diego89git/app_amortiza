import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabAdmincliComponent } from './cab-admincli.component';

describe('CabAdmincliComponent', () => {
  let component: CabAdmincliComponent;
  let fixture: ComponentFixture<CabAdmincliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabAdmincliComponent]
    });
    fixture = TestBed.createComponent(CabAdmincliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
