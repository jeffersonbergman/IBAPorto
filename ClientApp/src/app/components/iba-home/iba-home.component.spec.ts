import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaHomeComponent } from './iba-home.component';

describe('IbaHomeComponent', () => {
  let component: IbaHomeComponent;
  let fixture: ComponentFixture<IbaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaHomeComponent]
    });
    fixture = TestBed.createComponent(IbaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
