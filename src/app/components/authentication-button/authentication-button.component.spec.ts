import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationButtonComponent } from './authentication-button.component';

describe('AuthenticationButtonComponent', () => {
  let component: AuthenticationButtonComponent;
  let fixture: ComponentFixture<AuthenticationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
