import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaLoginComponent } from './iba-login.component';

describe('IbaLoginComponent', () => {
  let component: IbaLoginComponent;
  let fixture: ComponentFixture<IbaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaLoginComponent]
    });
    fixture = TestBed.createComponent(IbaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
