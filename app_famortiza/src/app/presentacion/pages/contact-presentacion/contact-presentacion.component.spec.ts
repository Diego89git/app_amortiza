import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPresentacionComponent } from './contact-presentacion.component';

describe('ContactPresentacionComponent', () => {
  let component: ContactPresentacionComponent;
  let fixture: ComponentFixture<ContactPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPresentacionComponent]
    });
    fixture = TestBed.createComponent(ContactPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
