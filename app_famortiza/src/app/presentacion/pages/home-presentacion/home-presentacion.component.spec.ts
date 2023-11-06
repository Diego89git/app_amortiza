import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePresentacionComponent } from './home-presentacion.component';

describe('HomePresentacionComponent', () => {
  let component: HomePresentacionComponent;
  let fixture: ComponentFixture<HomePresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePresentacionComponent]
    });
    fixture = TestBed.createComponent(HomePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
